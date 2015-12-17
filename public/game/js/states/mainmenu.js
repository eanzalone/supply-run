var mainMenu = function(game){
};

var sprite;
var text;
var fontstyle = { font: '16px Creepster', fill: '#aaa', align:'center' };

mainMenu.prototype = {
	preload: function() {
	},
	create: function(){
		console.log('MAIN MENU');
		// var fontstyle = { fontSize: '16px', fill: '#aaa' };
		// Background img
		game.add.tileSprite(-250, -350, 1500, 1000, 'menu2');
		// Title
		game.add.text(100,100, 'Supply Run', { font: '64px Bangers', fill: '#fff', align:'center' });
		// Play
		this.game.add.button(320,300,'buttonimg',this.playTheGame,this);
		game.add.text(320,300, 'Play Game', fontstyle);
		// How to Play
		this.game.add.button(320,350,'buttonimg',this.howToPlay,this);
		game.add.text(320,350, 'How To Play', fontstyle);
		// Settings
		this.game.add.button(320,400,'buttonimg',this.gotoSettingsPg,this);
		game.add.text(320,400, 'Settings', fontstyle);
	},
	playTheGame: function(){
		this.game.state.start('chapter1');
	},
	howToPlay: function(){
		this.game.state.start('tutorialPg');
	},
	gotoSettingsPg: function(){
		this.game.state.start('settingsPg');
	}
};