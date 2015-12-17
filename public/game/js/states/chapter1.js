var chapter1 = function(game){
};

chapter1.prototype = {
	preload: function() {
	},
	create: function(){
		console.log('CHAPTER 1');
		game.add.tileSprite(-250, -350, 1500, 1000, 'menu1');
		this.game.add.button(320,300,'buttonimg',this.continueGame,this);
		game.add.text(320,300, 'Continue', fontstyle);
	},
	continueGame: function(){
		this.game.state.start('level1');
	}
};