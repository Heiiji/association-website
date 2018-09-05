var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  email: { type: String, required: true, unique: true },
  passwd: { type: String, required: true },
  rank: { type: String, required: false, default: "default" },
    picture: { type: String, required: false, default: "http://www.accessola.org/web/images/OLA/Divisions/ABO-FRANCO/Photos/Council/Portrait_Placeholder.png" },
    group: { type: String, required: false },
    name: { type: String, required: true },
    work: { type: String, required: false },
    admin: { type: Boolean, required: false, default: false }
});

var Users = mongoose.model("Users", UsersSchema);
module.exports = Users;
