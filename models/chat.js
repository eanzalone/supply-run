var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var chatSchema = new Schema({
    user: { type:String, required:true},
    message: String
});

var Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;