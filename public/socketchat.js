console.log("socketchat.js is connected");
$(document).ready(function(){
	var socket = io();
	$('form').submit(function(e){
	  socket.emit('chat message', $('#m').val());
	  $('#m').val('');
	  return false;
	});
	socket.on('chat message', function(msg){
	  $('#messages').append($('<li>').text(msg));
	});
	$.get('/api/msgs', function(data){
		data.forEach(function(el){
			$('#messages').append($('<li>').text(el.message));
		});
	});
});