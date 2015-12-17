var chapter2 = function(game){
};

chapter2.prototype = {
	preload: function() {
	},
	create: function(){
		console.log('CHAPTER 2');
		game.add.tileSprite(-250, -350, 1920, 1080, 'menu3');
		// Story
		game.add.text(125,25, 'It\'s Their World Now...', { font: '32px American Typewriter', fill: '#fff' });
		var chap2 = 'That much has always been abundantly \nclear to you. You could fight back, but \nwhen the dead outnumber the living \none hundred to one, it\'s hard to be \noptimistic. Your best bet is to just try \nand survive. With enough time you can \nset up a permenant home, find a place \nyou can protect from the herds. Once \nyou have that, maybe you can make a life again.';
		game.add.text(150,100, chap2, { font: '24px American Typewriter', fill: '#fff', align: 'center' });
		game.add.text(375,450, '...You\'re Just Living In It', { font: '32px American Typewriter', fill: '#fff' });
		this.game.add.button(500,500,'buttonimg',this.continueGame,this);
		game.add.text(525,502, 'Continue', { font: '30px Bangers', fill: '#000000', align:'center' });
	},
	continueGame: function(){
		this.game.state.start('level2');
	}
};