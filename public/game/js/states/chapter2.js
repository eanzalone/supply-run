var chapter2 = function(game){
};

chapter2.prototype = {
	preload: function() {
	},
	create: function(){
		console.log('CHAPTER 2');
		game.add.tileSprite(-250, -350, 1500, 1000, 'menu1');
		this.game.add.button(320,300,'buttonimg',this.continueGame,this);
		game.add.text(320,300, 'Continue', fontstyle);
	},
	continueGame: function(){
		this.game.state.start('level2');
	}
};