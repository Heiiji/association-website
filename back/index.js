const fs              = require('fs');
const cors            = require('cors');
const express         = require('express');
const nodemailer      = require('nodemailer');
const http            = require('http');
const WebSocketServer = require('websocket').server;
const mongoose        = require('mongoose');
const bodyParser      = require('body-parser');
const Parser          = require('rss-parser');
const axios          = require('axios');

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
            res.send({
                success: false,
                text: 'Utilisateur non trouvé'
            });
            return ;
        }
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
    })
});

app.listen(6120);

// https launch below --------------

//app.listen(3052)

// https.createServer(options, app).listen(3051);
