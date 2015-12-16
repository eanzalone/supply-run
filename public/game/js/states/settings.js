var settingsPg = function(game){
};

var sprite;
var text;

settingsPg.prototype = {
	preload: function() {
	},
	create: function(){
		console.log('SETTINGS');
		game.add.tileSprite(-250, -350, 1500, 1000, 'menu1');
		this.game.add.button(320,300,'buttonimg',this.backtoMenu,this);
	},
	backtoMenu: function(){
		this.game.state.start('mainMenu');
	}
};