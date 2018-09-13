var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  email: { type: String, required: true, unique: true },
  passwd: { type: String, required: true },
  rank: { type: String, required: false, default: "default" },
  token: { type: String, required: false, default: 'Nier Automata' }
});

var Users = mongoose.model("Users", UsersSchema);
module.exports = Users;
