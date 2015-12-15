var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var chatSchema = new Schema({
    user: String,
    message: String
});

var Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;