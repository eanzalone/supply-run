var level1 = function(game){
};

var score;
var bkg;
var map;
var layer;
var cursors;
var sprite;
var doorway;
var supplies;

level1.prototype = {

	create: function(){
		console.log('LEVEL 1');
		// CREATE MAP
	    bkg = game.add.tileSprite(0, 0, 800, 600, 'background');
	    bkg.fixedToCamera = true;
	    map = game.add.tilemap('map', 35, 35);
	    map.addTilesetImage('tileset_img');
	    layer = map.createLayer(0);
	    layer.resizeWorld();
	    map.setCollisionByExclusion([], true);
	    game.physics.arcade.gravity.y = 300;

	    // SPRITE
	    sprite = game.add.sprite(50, 50, 'survivor');
	    sprite.animations.add('left', [8, 9, 10, 11, 12, 13, 14, 15], 12, true);
        sprite.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7], 12, true);
	    game.physics.enable(sprite);
	    sprite.body.gravity.y = 300;
	    sprite.body.collideWorldBounds = true;
	    game.camera.follow(sprite);

	    // SUPPLIES
	    supplies = game.add.group();
	    supplies.enableBody = true;
	    supplies.create(850, 400, 'medicine');
	    supplies.create(100, 300, 'medicine');

	    // DOORWAY
	    goal = game.add.group();
	    goal.enableBody = true;
	    doorway = goal.create(500, 500, 'locked_door');

	    score = 0;

	    // MOVEMENT
	    cursors = game.input.keyboard.createCursorKeys();

	},

	update: function(){

	    this.game.physics.arcade.collide(sprite, layer);
	    this.game.physics.arcade.collide(supplies, layer);
	    this.game.physics.arcade.collide(goal, layer);
	    this.game.physics.arcade.overlap(sprite, supplies, this.collectSupplies, null, this);
	    this.game.physics.arcade.overlap(sprite, goal, this.reachGoal);

	    this.movePlayer();


	},
	movePlayer: function(){
	    //  Un-comment these to gain full control over the sprite
	    sprite.body.velocity.x = 0;
	    // sprite.body.velocity.y = 0;

	    if (cursors.up.isDown)
	    {
	        sprite.body.velocity.y = -150;
	    }
	    if (cursors.down.isDown)
	    {
	        sprite.body.velocity.y = 150;
	    }

	    else if (cursors.left.isDown)
	    {
	        sprite.body.velocity.x = -150;
	        sprite.animations.play('left');
	    }
	    else if (cursors.right.isDown)
	    {
	        sprite.body.velocity.x = 150;
	        sprite.animations.play('right');
	    }
	    else
	    {
	        // Stand still
	        sprite.animations.stop();
	        sprite.frame = 17;
	    }
	//     if (cursors.up.isDown && sprite.body.touching.down) {
	// 	    sprite.body.velocity.y = -320; 
	//     }
	},
	collectSupplies: function(sprite, medicine){

	    // Removes the medicine from the screen
	    medicine.kill();

	    //  Add and update the score
	    score += 1;
	    console.log('Supplies Collected: '+score+'/2');
	    if (score == 2){
	    	console.log('All Supplies Collected. head to exit!');
	    	doorway.loadTexture('open_door');
	    }

	},
	reachGoal: function(sprite, goal){
		if (score < 2){
			console.log('collect all supplies');
		}
		else{
			console.log('goal reached.');
			game.state.start('chapter2');
			// game.state.start('mainMenu'); //FOR TESTING ONLY
		}
	}


	//when score=20 game.state.start(mainMenu)
};