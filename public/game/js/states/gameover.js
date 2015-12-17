var gameover = function(game){
};

gameover.prototype = {
	preload: function() {
	},
	create: function(){
		console.log('YOU DIED');
		game.add.tileSprite(-250, -350, 1500, 1000, 'menu1');
		game.add.text(300,150, 'You Died', { font: '64px Bangers', fill: '#fff', align:'center' });
		game.add.text(125,250, 'Your Companions Will Have To Continue Without You', { font: '32px Bangers', fill: '#fff', align:'center' });
		this.game.add.button(320,350,'buttonimg',this.backtoMenu,this);
		game.add.text(338,353, 'Main Menu', { font: '30px Bangers', fill: '#000000', align:'center' });
	},
	backtoMenu: function(){
		this.game.state.start('mainMenu');
	}
};