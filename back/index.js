const fs              = require('fs');
const cors            = require('cors');
const express         = require('express');
const nodemailer      = require('nodemailer');
const http            = require('http');
const WebSocketServer = require('websocket').server;
const mongoose        = require('mongoose');
const bodyParser      = require('body-parser');
const Parser          = require('rss-parser');
const fileUpload      = require('express-fileupload');
const axios           = require('axios');
var path                = require('path');

let parser = new Parser();

let crypto;
try {
  crypto = require('crypto');
} catch (err) {
  console.log('crypto support is disabled!');
  exit;
}

/*const https = require("https")

const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/yorha.blade-group.fr/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/yorha.blade-group.fr/fullchain.pem")
}*/

// var transporter = nodemailer.createTransport({
//  service: 'gmail',
//  auth: {
//     user: 'mail@blade-group.com',
//     pass: 'mdp'
//   }
// });

mongoose.connect('mongodb://localhost:27017/chat-alors', { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("connection succeeded")
});

var Users = require("./models/users");
var Chats = require("./models/chats");

const app         = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

console.log('server start');


app.get('/hello', (req, res) => {
  res.send({
    text: "world"
  })
});

app.get('/chats', (req, res) => {
    Chats.find({}, (err, chats) => {
        if (err) {
            console.log(err)
        }
        res.send({
            chats: chats
        });
    });
});

app.get('/images/:name', (req, res) => {
    res.sendFile(path.join(__dirname, './images/', req.params.name));
});

app.put('/delOne', (req, res) => {
    console.log(req.body);
    Chats.findById(req.body._id, (err, chat) => {
        if (err) {
            console.log(err);
            return ;
        }
        chat.remove();
        res.send({
            success: true
        });
    });
});

app.post('/newCat', (req, res) => {
    let hash = crypto.createHash('sha256');
    hash.update(req.body.description + Date.now());

    let filename = hash.digest('hex');

    fs.writeFile('./images/' + filename + '.jpg', req.files.main.data, (err) => {
        console.log(err)
    });

    let new_cat = new Chats({
        bornDate: req.body.bornDate,
        description: req.body.description,
        img: filename,
        state: req.body.state ? req.body.state : 'disponible',
        name: req.body.name ? req.body.name : 'N/A',
    });
    new_cat.save((err) => {
        if (err) {
            console.log(err);
            res.send({
                success: false
            });
        } else {
            res.send({
                success: true
            });
        }
    });
});

app.post('/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.send({
            success: false,
            text: 'erreur d\'identifiants'
        });
        return ;
    }
    Users.findOne({email: req.body.email}, (err, user) => {
        if (err) {
            console.log(err);
            res.send({
                success: false,
                text: err
            });
            return ;
        }
        if (!user) {
          console.log('hi admin')
            Users.find({}, (err, users) => {
              if (err) {
                  console.log(err);
                  res.send({
                      success: false,
                      text: err
                  });
                  return ;
              }
              let new_user = new Users({
                email: req.body.email,
                passwd: req.body.password,
                rank: 'admin',
              });
              new_user.save();
              res.send({
                  success: true,
                  user: new_user
              });
              return ;
            });
        } else {
          console.log(user)
          if (user.passwd !== req.body.password) {
              res.send({
                  success: false,
                  text: 'mot de passe invalide'
              });
          }
          res.send({
              success: true,
              user: user
          });
        }
    })
});

app.listen(6120);

// https launch below --------------

//app.listen(3052)

// https.createServer(options, app).listen(3051);
