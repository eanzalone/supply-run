console.log("socketchat.js is connected");
$(document).ready(function(){
	var socket = io();
	$('form').submit(function(e){
	  socket.emit('chat message', $('#nickname').val(), $('#m').val());
	  $('#m').val('');
	  return false;
	});
	socket.on('chat message', function(msg){
		// console.log("What Gets Posted: ",msg.user, msg.message);
	  $('#messages').append($('<li>').html('<strong>'+msg.user+': </strong>'+msg.message));
	});
	$.get('/api/msgs', function(data){
		data.forEach(function(el){
			// console.log(el);
			$('#messages').append($('<li>').html('<strong>'+el.user+': </strong>'+el.message));
		});
	});
});