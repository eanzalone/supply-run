var chapter3 = function(game){
};

chapter3.prototype = {
	preload: function() {
	},
	create: function(){
		console.log('CHAPTER 3');
		game.add.tileSprite(-800, -480, 1920, 1080, 'menu1');
		// Story
		var chap3p1 = 'Obviously, your group weren\'t \nthe only survivors of the outbreak. \nThere were others, all coping in \ntheir own ways. It was strange what \nthe end of the world brought out in people.';
		game.add.text(75,40, chap3p1, { font: '20px American Typewriter', fill: '#fff' });
		var chap3p2 = 'You ran across a warehouse. The windows \nwere broken and boarded back up- fortified. \nThere were people inside!';
		game.add.text(200,230, chap3p2, { font: '20px American Typewriter', fill: '#fff' });
		var chap3p3 = 'Or... You wouldn\'t be that lucky. As you approached, \nyou noticed the door hanging off its hinges, \nno signs that anyone had tried to fix it. That was \nless reassuring. Your sinking feeling only grew worse \nas you heard the dead inside. Whoever these people were, \nthey had either left or lost. Either way, maybe they left \nsome things behind...';
		game.add.text(125,350, chap3p3, { font: '20px American Typewriter', fill: '#fff' });
		this.game.add.button(575,525,'buttonimg',this.continueGame,this);
		game.add.text(600,527, 'Continue', { font: '30px Bangers', fill: '#000000', align:'center' });
	},
	continueGame: function(){
		this.game.state.start('level3');
	}
};