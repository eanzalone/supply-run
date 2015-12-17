var chapter1 = function(game){
};

chapter1.prototype = {
	preload: function() {
	},
	create: function(){
		console.log('CHAPTER 1');
		game.add.tileSprite(-250, -350, 1600, 963, 'menu4');
		// Story
		var chap1p1 = 'It\'s been over a year since flipping a light switch \ndid anything. It took the power grids a little longer \nto shut down than everything else, but it happened. \nYou used to hear rumors about sanctuaries, places \nwith solar power, hot water, and sturdy walls, \nbut those whispers are long since past...';
		game.add.text(50,50, chap1p1, { font: '16px American Typewriter', fill: '#fff' });
		var chap1p2 = 'It\'s just you and a handful of other survivors. \nYou travel around a lot, but for now you\'ve made \nyour home in an abandoned grocery store. Anything \nthat wasn\'t perishable had been raided long ago. \nAt this point, it was just a solid set of doors and a \nsecurity gate you could close at night, as long as \nyou didn\'t make too much noise...';
		game.add.text(375,200, chap1p2, { font: '16px American Typewriter', fill: '#fff' });
		var chap1p3 = 'But someone still has to go outside. Someone has \nto get food, medicine, weapons. You volunteer. \nYou always volunteer. People expect it of you by now. \nNo one seems to understand that being outside, \naround the dead, is what makes you feel most alive.';
		game.add.text(75,385, chap1p3, { font: '16px American Typewriter', fill: '#fff' });
		// Continue button
		this.game.add.button(595,510,'buttonimg',this.continueGame,this);
		game.add.text(620,512, 'Continue', { font: '30px Bangers', fill: '#000000', align:'center' });
	},
	continueGame: function(){
		this.game.state.start('level1');
	}
};