var tobeContinued = function(game){
};

tobeContinued.prototype = {
	preload: function() {
	},
	create: function(){
		console.log('TO BE CONTINUED');
		game.add.tileSprite(-250, -350, 1500, 1000, 'menu1');
		game.add.text(220,150, 'To Be Continued...', { font: '64px Bangers', fill: '#fff', align:'center' });
		game.add.text(260,250, 'Chapter 4 Coming Soon', { font: '32px Bangers', fill: '#fff', align:'center' });
		this.game.add.button(320,350,'buttonimg',this.backtoMenu,this);
		game.add.text(338,353, 'Main Menu', { font: '30px Bangers', fill: '#000000', align:'center' });
	},
	backtoMenu: function(){
		this.game.state.start('mainMenu');
	}
};