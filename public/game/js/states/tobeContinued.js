var tobeContinued = function(game){
};

tobeContinued.prototype = {
	preload: function() {
	},
	create: function(){
		console.log('TO BE CONTINUED');
		game.add.tileSprite(-250, -350, 1500, 1000, 'menu1');
		this.game.add.button(320,300,'buttonimg',this.backtoMenu,this);
		// game.add.text(320,300, 'Continue', fontstyle);
	},
	backtoMenu: function(){
		this.game.state.start('mainMenu');
	}
};