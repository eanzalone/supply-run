var mongoose = require('mongoose');
// mongoose.connect(process.env.PORT || 'mongodb://localhost/project3');

mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/project3'
);


module.exports.Chat = require('./chat');