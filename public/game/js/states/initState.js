// BUILDS THE LOADING BAR

var initState = function(game){
};

initState.prototype = {
	preload: function() {
		this.load.image('loading', '/static/game/images/loading2.png');
		// this.load.image('loading', '/static/game/images/loader.gif');
		console.log('loading bar loaded');
	},
	create: function(){
		// debugger;
		game.stage.backgroundColor = '#bbbbbb';
		this.state.start('loading');
	}
};