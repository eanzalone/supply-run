// LOADS IN ALL GAME ASSETS
var loading = function(game){
};

loading.prototype = {

	preload: function() {
		var loadingBar = game.add.sprite(game.world.centerX - 240, game.world.centerY - 35, 'loading');
		this.load.setPreloadSprite(loadingBar);

		console.log('LOADING...');
			// load background images
			game.load.image('background', '/static/game/images/game_background.png');
			game.load.image('menu1', '/static/game/images/menu_img1.png');
			game.load.image('menu2', '/static/game/images/menu_img2.png');
			game.load.image('menu3', '/static/game/images/menu_img3.png');
			game.load.image('menu4', '/static/game/images/menu_img4.png');
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
			// load buttons
			game.load.image('buttonimg', '/static/game/sprites/button150x50.png');
			// load zombies
			game.load.spritesheet('zombie', '/static/game/sprites/zombie64.png', 64, 64);
			// load bullets
			game.load.image('bullet', '/static/game/sprites/bullet.png');
			// load music
			game.load.audio('ost', '/static/game/ost.mp3');
			// Add the loadingbar to the scene:
		console.log('FINISHED LOADING');
	},
	create: function(){
		// Music
		music = game.add.audio('ost');
		// music.play();
		// console.log('Music Playing');
		// game.state.start('mainMenu');
		game.state.start('level1');
	}
};