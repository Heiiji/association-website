const Parser          = require('rss-parser');
const axios          = require('axios');
var Thread = require("../models/thread");

module.exports = function (app, db, parser) {
    var Olnet = setInterval(function() {
        let nbr = 0;
        console.log('synchronisation : 01Net\n');
        parser.parseURL('https://www.01net.com/rss/info/flux-rss/flux-toutes-les-actualites/').then((feed) => {
            Thread.findOne({name: '01Net'}, (err, thread) => {
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
                                        name: '01Net',
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
                                        name: '01Net',
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
                            });
                        }
                    } else {
                        for (let i = 0; i < feed.items.length; i++) {
                            axios.get('http://api.embed.ly/1/oembed?url=' + feed.items[i].link + '&key=internal').then((embed) => {
                                feed.items[i].embed = embed.data.thumbnail_url;
                                if (nbr === (feed.items.length - 1)) {
                                    let new_thread = new Thread({
                                        name: '01Net',
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
                                        name: '01Net',
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