var mainMenu = function(game){
	console.log('MAIN MENU');
};

var sprite;
var text;

mainMenu.prototype = {
	preload: function() {
	},
	create: function(){
		// Background img
		game.add.tileSprite(-250, -350, 1500, 1000, 'menu2');
		// Play
		this.game.add.button(320,300,'buttonimg',this.playTheGame,this);
		// How to Play
		this.game.add.button(320,350,'buttonimg',this.howToPlay,this);
		// Settings
		this.game.add.button(320,400,'buttonimg',this.gotoSettingsPg,this);
	},
	playTheGame: function(){
		this.game.state.start('Level1');
	},
	howToPlay: function(){
		this.game.state.start('tutorialPg');
	},
	gotoSettingsPg: function(){
		this.game.state.start('settingsPg');
	}
};