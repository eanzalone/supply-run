var mongoose = require('mongoose');
mongoose.connect(process.env.PORT || 'mongodb://localhost/project3');

module.exports.Chat = require('./chat');