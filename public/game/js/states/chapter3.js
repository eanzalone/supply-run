var chapter3 = function(game){
};

chapter3.prototype = {
	preload: function() {
	},
	create: function(){
		console.log('CHAPTER 3');
		game.add.tileSprite(-800, -480, 1920, 1080, 'menu1');
		// Story
		// game.add.text(125,25, 'text', { font: '32px American Typewriter', fill: '#fff' });
		// var chap3 = 'text';
		// game.add.text(150,100, chap3, { font: '24px American Typewriter', fill: '#fff', align: 'center' });
		// game.add.text(375,450, 'text', { font: '32px American Typewriter', fill: '#fff' });
		this.game.add.button(500,500,'buttonimg',this.continueGame,this);
		game.add.text(525,502, 'Continue', { font: '30px Bangers', fill: '#000000', align:'center' });
	},
	continueGame: function(){
		this.game.state.start('level3');
	}
};