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
			game.load.spritesheet('survivor', '/static/game/sprites/survivor64.png', 64, 64);
			// load supplies
			game.load.image('medicine', '/static/game/sprites/medicine32.png');
			// load goal
			game.load.image('locked_door', '/static/game/sprites/door_closed64.png');
			game.load.image('open_door', '/static/game/sprites/door_opened64.png');
			// load music
			game.load.audio('ost', '/static/game/ost.mp3');
		console.log('FINISHED LOADING');
	},
	create: function(){
		game.state.start('Level1'); //SET BACK TO MAIN MENU WHEN READY TO BUILD IT
	}
};