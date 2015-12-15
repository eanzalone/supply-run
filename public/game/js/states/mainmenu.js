var mainMenu = function(game){
	// console.log("%cStarting my awesome game", "color:white; background:red");

};

mainMenu.prototype = {

	preload: function() {
		console.log('MAIN MENU');
	},
	create: function(){
		this.game.add.button(160,320,"diamond",this.playTheGame,this);
	},
	playTheGame: function(){
		this.game.state.start('Level1');
	}
};