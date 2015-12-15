var loading = function(game){
	// console.log("%cStarting my awesome game", "color:white; background:red");

};

loading.prototype = {

	preload: function() {

		console.log('LOADING...');
			// load background image
			game.load.image('background', '/static/game/background_img.png');
			// load maps
			game.load.tilemap('map', '/static/game/maps_tilesets/random.csv', null, Phaser.Tilemap.CSV);
			// load tilesets
			game.load.image('tileset_img', '/static/game/maps_tilesets/scifi_platformTiles_32x32.png');
			// load player
			game.load.spritesheet('phaser', '/static/game/sprites/survivor.png', 32, 32);
			// load supplies
			game.load.image('star', '/static/game/sprites/medicine.png');
			// load goal
			game.load.image('diamond', '/static/game/sprites/door_opened.png');
			// load music
			game.load.audio('ost', '/static/game/ost.mp3');
		console.log('FINISHED LOADING');
	},
	create: function(){
		game.state.start('mainMenu');
	}
};