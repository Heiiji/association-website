const Parser          = require('rss-parser');
const axios          = require('axios');
var Thread = require("../models/thread");

module.exports = function (app, db, parser) {
    var Frandroid = setInterval(function() {
        let nbr = 0;
        console.log('synchronisation : Frandroid\n');
        parser.parseURL('https://www.frandroid.com/feed').then((feed) => {
            Thread.findOne({name: 'Frandroid'}, (err, thread) => {
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
                                        name: 'Frandroid',
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
                                        name: 'Frandroid',
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
                                        name: 'Frandroid',
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
                                        name: 'Frandroid',
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
};