var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ThreadSchema = new Schema({
    name: { type: String, required: true },
    thread: { type: Object, required: false },
    lang: { type: String, required: true, default: 'en' },
    ref: { type: Object, required: false }
});

var Thread = mongoose.model("Thread", ThreadSchema);
module.exports = Thread;
