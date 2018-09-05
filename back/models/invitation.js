var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var InvitationSchema = new Schema({
  value: { type: String, required: true, unique: true },
  target: { type: String, required: true }
});

var Invitation = mongoose.model("Invitation", InvitationSchema);
module.exports = Invitation;
