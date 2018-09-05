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

mongoose.connect('mongodb://localhost:27017/centre-actu', { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("connection succeeded")
});

var Users = require("./models/users");
var Thread = require("./models/thread");

const app         = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

console.log('server start');
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

require('./threads/phoronix')(app, db, parser);
require('./threads/01net')(app, db, parser);
require('./threads/mediapart')(app, db, parser);
require('./threads/frandroid')(app, db, parser);
require('./threads/zdnet')(app, db, parser);
require('./threads/framasoft')(app, db, parser);

var JeuxOnline = setInterval(function() {
    let nbr = 0;
    console.log('synchronisation : JeuxOnline\n');
    parser.parseURL('https://www.jeuxonline.info/rss/actualites/rss.xml').then((feed) => {
        Thread.findOne({name: 'JeuxOnline'}, (err, thread) => {
            if (err) {
                console.log(err);
                return ;
            } else {
                if (!thread) {
                    for (let i = 0; i < feed.items.length; i++) {
                        axios.get('http://api.embed.ly/1/oembed?url=' + feed.items[i].link + '&key=internal').then((embed) => {
                            feed.items[i].embed = embed.data.thumbnail_url;
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'JeuxOnline',
                                    thread: feed.items,
                                    lang: 'fr',
                                    ref: feed.items[0]
                                });
                                new_thread.save((err) => {
                                    console.log(err);
                                })
                            } else {
                                nbr += 1;
                            }
                        }).catch((err) => {
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'JeuxOnline',
                                    lang: 'fr',
                                    thread: feed.items,
                                    ref: feed.items[0]
                                });
                                new_thread.save((err) => {
                                    console.log(err);
                                })
                            } else {
                                nbr += 1;
                            }
                        });
                    }
                } else {
                    for (let i = 0; i < feed.items.length; i++) {
                        axios.get('http://api.embed.ly/1/oembed?url=' + feed.items[i].link + '&key=internal').then((embed) => {
                            feed.items[i].embed = embed.data.thumbnail_url;
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'JeuxOnline',
                                    thread: feed.items,
                                    lang: 'fr',
                                    ref: feed.items[0]
                                });
                                Thread.findByIdAndRemove(thread._id, (err, yop) => {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        new_thread.save((err) => {
                                            console.log(err);
                                        })
                                    }
                                });
                            } else {
                                nbr += 1;
                            }
                        }).catch((err) => {
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'JeuxOnline',
                                    thread: feed.items,
                                    lang: 'fr',
                                    ref: feed.items[0]
                                });
                                Thread.findByIdAndRemove(thread._id, (err, yop) => {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        new_thread.save((err) => {
                                            console.log(err);
                                        })
                                    }
                                });
                            } else {
                                nbr += 1;
                            }
                        });
                    }
                }
            }
        });
    }).catch((err) => {
        console.log(err)
    });
}, 300000);

var journalDuGeek = setInterval(function() {
    let nbr = 0;
    console.log('synchronisation : Journal Du Geek\n');
    parser.parseURL('https://www.journaldugeek.com/feed/').then((feed) => {
        Thread.findOne({name: 'Journal Du Geek'}, (err, thread) => {
            if (err) {
                console.log(err);
                return ;
            } else {
                if (!thread) {
                    for (let i = 0; i < feed.items.length; i++) {
                        axios.get('http://api.embed.ly/1/oembed?url=' + feed.items[i].link + '&key=internal').then((embed) => {
                            feed.items[i].embed = embed.data.thumbnail_url;
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'Journal Du Geek',
                                    thread: feed.items,
                                    lang: 'fr',
                                    ref: feed.items[0]
                                });
                                new_thread.save((err) => {
                                    console.log(err);
                                })
                            } else {
                                nbr += 1;
                            }
                        }).catch((err) => {
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'Journal Du Geek',
                                    lang: 'fr',
                                    thread: feed.items,
                                    ref: feed.items[0]
                                });
                                new_thread.save((err) => {
                                    console.log(err);
                                })
                            } else {
                                nbr += 1;
                            }
                        });
                    }
                } else {
                    for (let i = 0; i < feed.items.length; i++) {
                        axios.get('http://api.embed.ly/1/oembed?url=' + feed.items[i].link + '&key=internal').then((embed) => {
                            feed.items[i].embed = embed.data.thumbnail_url;
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'Journal Du Geek',
                                    thread: feed.items,
                                    lang: 'fr',
                                    ref: feed.items[0]
                                });
                                Thread.findByIdAndRemove(thread._id, (err, yop) => {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        new_thread.save((err) => {
                                            console.log(err);
                                        })
                                    }
                                });
                            } else {
                                nbr += 1;
                            }
                        }).catch((err) => {
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'Journal Du Geek',
                                    thread: feed.items,
                                    lang: 'fr',
                                    ref: feed.items[0]
                                });
                                Thread.findByIdAndRemove(thread._id, (err, yop) => {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        new_thread.save((err) => {
                                            console.log(err);
                                        })
                                    }
                                });
                            } else {
                                nbr += 1;
                            }
                        });
                    }
                }
            }
        });
    }).catch((err) => {
        console.log(err)
    });
}, 300000);

var tomshardware = setInterval(function() {
    let nbr = 0;
    console.log('synchronisation : Tom\'s hardware\n');
    parser.parseURL('https://www.tomshardware.fr/feeds/rss2/all.xml').then((feed) => {
        Thread.findOne({name: 'Toms hardware'}, (err, thread) => {
            if (err) {
                console.log(err);
                return ;
            } else {
                if (!thread) {
                    for (let i = 0; i < feed.items.length; i++) {
                        axios.get('http://api.embed.ly/1/oembed?url=' + feed.items[i].link + '&key=internal').then((embed) => {
                            feed.items[i].embed = embed.data.thumbnail_url;
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'Toms hardware',
                                    thread: feed.items,
                                    lang: 'fr',
                                    ref: feed.items[0]
                                });
                                new_thread.save((err) => {
                                    console.log(err);
                                })
                            } else {
                                nbr += 1;
                            }
                        }).catch((err) => {
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'Toms hardware',
                                    lang: 'fr',
                                    thread: feed.items,
                                    ref: feed.items[0]
                                });
                                new_thread.save((err) => {
                                    console.log(err);
                                })
                            } else {
                                nbr += 1;
                            }
                        });
                    }
                } else {
                    for (let i = 0; i < feed.items.length; i++) {
                        axios.get('http://api.embed.ly/1/oembed?url=' + feed.items[i].link + '&key=internal').then((embed) => {
                            feed.items[i].embed = embed.data.thumbnail_url;
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'Toms hardware',
                                    thread: feed.items,
                                    lang: 'fr',
                                    ref: feed.items[0]
                                });
                                Thread.findByIdAndRemove(thread._id, (err, yop) => {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        new_thread.save((err) => {
                                            console.log(err);
                                        })
                                    }
                                });
                            } else {
                                nbr += 1;
                            }
                        }).catch((err) => {
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'Toms hardware',
                                    thread: feed.items,
                                    lang: 'fr',
                                    ref: feed.items[0]
                                });
                                Thread.findByIdAndRemove(thread._id, (err, yop) => {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        new_thread.save((err) => {
                                            console.log(err);
                                        })
                                    }
                                });
                            } else {
                                nbr += 1;
                            }
                        });
                    }
                }
            }
        });
    }).catch((err) => {
        console.log(err)
    });
}, 300000);

var lesNumeriques = setInterval(function() {
    let nbr = 0;
    console.log('synchronisation : Les Numériques\n');
    parser.parseURL('http://feeds.feedburner.com/lesnumeriques/news').then((feed) => {
        Thread.findOne({name: 'Les Numériques'}, (err, thread) => {
            if (err) {
                console.log(err);
                return ;
            } else {
                if (!thread) {
                    for (let i = 0; i < feed.items.length; i++) {
                        axios.get('http://api.embed.ly/1/oembed?url=' + feed.items[i].link + '&key=internal').then((embed) => {
                            feed.items[i].embed = embed.data.thumbnail_url;
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'Les Numériques',
                                    thread: feed.items,
                                    lang: 'fr',
                                    ref: feed.items[0]
                                });
                                new_thread.save((err) => {
                                    console.log(err);
                                })
                            } else {
                                nbr += 1;
                            }
                        }).catch((err) => {
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'Les Numériques',
                                    lang: 'fr',
                                    thread: feed.items,
                                    ref: feed.items[0]
                                });
                                new_thread.save((err) => {
                                    console.log(err);
                                })
                            } else {
                                nbr += 1;
                            }
                        });
                    }
                } else {
                    for (let i = 0; i < feed.items.length; i++) {
                        axios.get('http://api.embed.ly/1/oembed?url=' + feed.items[i].link + '&key=internal').then((embed) => {
                            feed.items[i].embed = embed.data.thumbnail_url;
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'Les Numériques',
                                    thread: feed.items,
                                    lang: 'fr',
                                    ref: feed.items[0]
                                });
                                Thread.findByIdAndRemove(thread._id, (err, yop) => {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        new_thread.save((err) => {
                                            console.log(err);
                                        })
                                    }
                                });
                            } else {
                                nbr += 1;
                            }
                        }).catch((err) => {
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'Les Numériques',
                                    thread: feed.items,
                                    lang: 'fr',
                                    ref: feed.items[0]
                                });
                                Thread.findByIdAndRemove(thread._id, (err, yop) => {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        new_thread.save((err) => {
                                            console.log(err);
                                        })
                                    }
                                });
                            } else {
                                nbr += 1;
                            }
                        });
                    }
                }
            }
        });
    }).catch((err) => {
        console.log(err)
    });
}, 300000);

var NextImpact = setInterval(function() {
    let nbr = 0;
    console.log('synchronisation : Next inpact\n');
    parser.parseURL('https://www.nextinpact.com/rss/news.xml').then((feed) => {
        Thread.findOne({name: 'Next inpact'}, (err, thread) => {
            if (err) {
                console.log(err);
                return ;
            } else {
                if (!thread) {
                    for (let i = 0; i < feed.items.length; i++) {
                        axios.get('http://api.embed.ly/1/oembed?url=' + feed.items[i].link + '&key=internal').then((embed) => {
                            feed.items[i].embed = embed.data.thumbnail_url;
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'Next inpact',
                                    thread: feed.items,
                                    lang: 'fr',
                                    ref: feed.items[0]
                                });
                                new_thread.save((err) => {
                                    console.log(err);
                                })
                            } else {
                                nbr += 1;
                            }
                        }).catch((err) => {
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'Next inpact',
                                    lang: 'fr',
                                    thread: feed.items,
                                    ref: feed.items[0]
                                });
                                new_thread.save((err) => {
                                    console.log(err);
                                })
                            } else {
                                nbr += 1;
                            }
                        });
                    }
                } else {
                    for (let i = 0; i < feed.items.length; i++) {
                        axios.get('http://api.embed.ly/1/oembed?url=' + feed.items[i].link + '&key=internal').then((embed) => {
                            feed.items[i].embed = embed.data.thumbnail_url;
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'Next inpact',
                                    thread: feed.items,
                                    lang: 'fr',
                                    ref: feed.items[0]
                                });
                                Thread.findByIdAndRemove(thread._id, (err, yop) => {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        new_thread.save((err) => {
                                            console.log(err);
                                        })
                                    }
                                });
                            } else {
                                nbr += 1;
                            }
                        }).catch((err) => {
                            if (nbr === (feed.items.length - 1)) {
                                let new_thread = new Thread({
                                    name: 'Next inpact',
                                    thread: feed.items,
                                    lang: 'fr',
                                    ref: feed.items[0]
                                });
                                Thread.findByIdAndRemove(thread._id, (err, yop) => {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        new_thread.save((err) => {
                                            console.log(err);
                                        })
                                    }
                                });
                            } else {
                                nbr += 1;
                            }
                        });
                    }
                }
            }
        });
    }).catch((err) => {
        console.log(err)
    });
}, 300000);



app.get('/hello', (req, res) => {
  res.send({
    text: "world"
  })
});

app.get('/news', (req, res) => {
    Thread.find((err, thread) => {
        res.send({
            news: thread
        });
    });
});

app.listen(6120);

// https launch below --------------

//app.listen(3052)

// https.createServer(options, app).listen(3051);

/*
var socketServer = http.createServer((request, response) => {
  // it's just for socket port
});

socketServer.listen(3051, () => {
  console.log('socket server is open');
});

var wsServer = new WebSocketServer({
  httpServer: socketServer
});

wsServer.on('request', (request) => {
  var connection = request.accept(null, request.origin);
  console.log('a socket is open');
  babData.find({}, function (error, data) {
    if (error) {
        console.error(error);
    } else {
      connection.sendUTF(JSON.stringify(data))
    }
  });

  connection.on('message', (msg) => {
    if (msg.type === 'utf8') {
      let data = JSON.parse(msg.utf8Data);
      console.log(msg.utf8Data);
      let name = data.name;
      let date = data.date;
      let autor = data.autor;
      let record = data.record;
      let id = data._id;
      if (id) {
        if (name) {
          babData.findById(id, function (error, scen) {
            if (error) {
                console.error(error);
            } else {
              scen.name = name;
              scen.save(function (error) {
                if (error) {
                  console.log(error)
                }
                babData.find({}, function (error, data) {
                  if (error) {
                      console.error(error);
                  } else {
                    connection.sendUTF(JSON.stringify(data))
                  }
                });
              })
            }
          });
        } else {
          babData.deleteOne({ _id: id }, (err) => {
            if (err) {
              console.log(err)
            }
            babData.find({}, function (error, data) {
              if (error) {
                  console.error(error);
              } else {
                connection.sendUTF(JSON.stringify(data))
              }
            });
          })
        }
      } else {
        if (!record || !date || !name) {
          console.log('Error data format')
          return ;
        } else {
          let new_bab = new babData({
            name: name,
            date: date,
            autor: autor,
            record: record
          });
          new_bab.save(function (error) {
            if (error) {
              console.log(error)
            } else {
              babData.find({}, function (error, data) {
                if (error) {
                    console.error(error);
                } else {
                  connection.sendUTF(JSON.stringify(data))
                }
              });
            }
          });
        }
      }
    }
  })

  connection.on('close', (conn) => {
    console.log('user exit');
  });
})*/
