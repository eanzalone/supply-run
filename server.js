var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

db = require('./models');

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(nickname, msg){
    console.log("User: ", nickname);
    console.log("Message: ", msg);
    // Add msg to database
    db.Chat.create({user: nickname, message: msg}, function(err, chat){
      if (err){
        console.log(err);
      } else {
        console.log("Success! ", chat);
        io.emit('chat message', {user: nickname, message: msg});
      }
    });
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

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

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});