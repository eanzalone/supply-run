var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

db = require('./models');

// mongoose.connect(process.env.PORT || 'mongodb://localhost/sockets');

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log("Message: ", msg);
    // Add msg to database
    db.Chat.create({message: msg}, function(err, chat){
      if (err){
        console.log(err);
      } else {
        console.log("Success! ", chat);
        io.emit('chat message', msg);
        // socket.emit('chat message', $('#m').val());
      }
    });
    // console.log('message: ' + msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

// var msgs =[
//   {message: "quite"},
//   {message: "sure"},
//   {message: "depending"},
//   {message: "omg"},
//   {message: "meh"}
// ];

app.get("/api/msgs", function (req, res){
	// send msgs data as JSON
	// res.json(msgs);
  db.Chat.find({}, function(err, info){
    if (err){
      return(err);
    } else {
      var messages = info;
      res.send(messages);
    }
  });
});

// app.post('/api/msgs', function(req, res){
//   console.log("request:", req.body);
// 	var newMessage = req.body;
// 	// var newid = msgs.length;
// 	// newMessage.id = newid;
// 	if (msgs.length !== 0){
// 		newMessage.id = msgs[msgs.length - 1].id +1;
// 	} else {
// 		newMessage.id = 0;
// 	}
// 	msgs.push(newMessage);
// 	//console.log(msgs);
// 	res.json(newMessage);
// });

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});