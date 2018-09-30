var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ChatsSchema = new Schema({
    bornDate: { type: Date, required: true },
    name: { type: String, required: false, default: 'N/A' },
    description: { type: String, required: false },
    img: { type: String, required: true },
    state: { type: String, required: false, default: 'disponible' }
});

var Chats = mongoose.model("Chats", ChatsSchema);
module.exports = Chats;
