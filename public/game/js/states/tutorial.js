var tutorialPg = function(game){
};

var sprite;
var text;

tutorialPg.prototype = {
	preload: function() {
	},
	create: function(){
		console.log('HOW TO PLAY');
		game.add.tileSprite(-250, -350, 1920, 1080, 'menu1');
		game.add.text(263, 100, 'How to Play', { font: '64px Bangers', fill: '#ffffff', align:'center' });
		// arrow keys
		game.add.text(165, 200, 'Use the arrow keys to move', { font: '48px Bangers', fill: '#ffffff', align:'center' });
		// space to shoot right
		game.add.text(125, 250, 'Use the space bar to shoot right', { font: '48px Bangers', fill: '#ffffff', align:'center' });
		// collect all the supplies
		game.add.text(110, 300, 'Collect all the supplies to move on', { font: '48px Bangers', fill: '#ffffff', align:'center' });
		// don't let the zombies get you
		game.add.text(150, 350, 'Don\'t let the zombies get you!', { font: '48px Bangers', fill: '#ffffff', align:'center' });
		// Back to Menu
		this.game.add.button(320,450,'buttonimg',this.backtoMenu,this);
		game.add.text(338,453, 'Main Menu', { font: '30px Bangers', fill: '#000000', align:'center' });
	},
	backtoMenu: function(){
		this.game.state.start('mainMenu');
	}
};