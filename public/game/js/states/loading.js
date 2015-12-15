var loading = function(game){
	// console.log("%cStarting my awesome game", "color:white; background:red");

};

loading.prototype = {

	preload: function() {

		console.log('LOADING...');
			// load background image
			game.load.image('background', '/static/game/background_img.png');
			// load maps
			// game.load.tilemap('map', 'assets/tilemaps/maps/random.csv', null, Phaser.Tilemap.CSV);
			// load tilesets
			// game.load.image('tileset_img', 'assets/tilemaps/tiles/scifi_platformTiles_32x32.png');
			// load player
			// game.load.image('phaser', 'assets/sprites/phaser-dude.png');
			// load supplies
			// game.load.image('star', 'assets/star.png');
			// load goal
			// game.load.image('diamond', 'assets/diamond.png');
			// load music
		console.log('FINISHED LOADING');
	},
	create: function(){
		game.state.start('mainMenu');
	}
};