var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

var msgs =[
  {message: "quite"},
  {message: "sure"},
  {message: "depending"},
  {message: "omg"},
  {message: "meh"}
];

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    // Add msg to database

    console.log('message: ' + msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

app.get("/api/msgs", function (req, res){
	// send msgs data as JSON
	res.json(msgs);
});

app.post('/api/msgs', function(req, res){
	var newMessage = req.body;
	// var newid = msgs.length;
	// newMessage.id = newid;
	if (msgs.length !== 0){
		newMessage.id = msgs[msgs.length - 1].id +1;
	} else {
		newMessage.id = 0;
	}
	msgs.push(newMessage);
	//console.log(msgs);
	res.json(newMessage);
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});