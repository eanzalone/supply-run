var settingsPg = function(game){
};

settingsPg.prototype = {
	preload: function() {
	},
	create: function(){
		console.log('SETTINGS');
		game.add.tileSprite(-250, -350, 1920, 1080, 'menu1');
		game.add.text(300,150, 'Settings', { font: '64px Bangers', fill: '#fff', align:'center' });
		// Back to Menu
		this.game.add.button(320,300,'buttonimg',this.backtoMenu,this);
		game.add.text(338,303, 'Main Menu', { font: '30px Bangers', fill: '#000000', align:'center' });
		// Audio Off
		this.game.add.button(320,350,'buttonimg',this.muteMusic,this);
		game.add.text(330,356, 'Turn Off Music', { font: '24px Bangers', fill: '#000000', align:'center' });
		// Audio On
		this.game.add.button(320,400,'buttonimg',this.startMusic,this);
		game.add.text(333,405, 'Turn On Music', { font: '24px Bangers', fill: '#000000', align:'center' });
	},
	backtoMenu: function(){
		this.game.state.start('mainMenu');
	},
	muteMusic: function(){
		music.destroy();
		console.log('Music Off');
	},
	startMusic: function(){
		music = game.add.audio('ost');
		music.play();
		console.log('Music On');
	}
};