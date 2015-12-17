var mainMenu = function(game){
};

var sprite;
var text;

mainMenu.prototype = {
	preload: function() {
	},
	create: function(){
		console.log('MAIN MENU');
		// Background img
		game.add.tileSprite(-250, -350, 1500, 1000, 'menu2');
		// Title
		game.add.text(275,150, 'Supply Run', { font: '64px Bangers', fill: '#fff', align:'center' });
		// Play
		this.game.add.button(320,300,'buttonimg',this.playTheGame,this);
		game.add.text(340,303, 'Play Game', { font: '30px Bangers', fill: '#000000', align:'center' });
		// How to Play
		this.game.add.button(320,350,'buttonimg',this.howToPlay,this);
		game.add.text(329,353, 'How To Play', { font: '30px Bangers', fill: '#000000', align:'center' });
		// Settings
		this.game.add.button(320,400,'buttonimg',this.gotoSettingsPg,this);
		game.add.text(345,401, 'Settings', { font: '30px Bangers', fill: '#000000', align:'center' });
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