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
		this.game.add.button(320,300,'buttonimg',this.backtoMenu,this);
		game.add.text(320,300, 'Main Menu', { font: '30px Bangers', fill: '#000000', align:'center' });
	},
	backtoMenu: function(){
		this.game.state.start('mainMenu');
	}
};