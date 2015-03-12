var gameProperties = {} // type is normal or testing 
gameProperties.gameId = "realGame";
gameProperties.gameMatrix = [[-2, 5], [0, 0]];  // payoff showing what user got from himself then game
gameProperties.gameMatrixIsSymmetrical = true;
gameProperties.type = 'PD';

// gameProperties.pdGameMatrix = [['A', 'B', 0, 5], ['B', 'A', 5, 0], ['A', 'A', 3, 3], ['B', 'B', 1, 1]];
// for new game.
gameProperties.pdGameMatrix = [['A', 'B', -2, 5], ['B', 'A', 5, -2], ['A', 'A', 3, 3], ['B', 'B', 0, 0]];
gameProperties.gameTypes  =    [ 'normal', 

// 'randomRecommenders', 
// 'realRecommenders', 
'oneRealRecommender' 
,'oneRandomRecommender'
];

gameProperties.gameRounds = function(x)
{
	// returns x + a random number from less than or equal to 10.
	// x must be greater than zero.
	if(typeof x === 'undefined')
	{
		return Math.floor((Math.random() * 10));
	}
	return x + Math.floor((Math.random() * 10));
}

module.exports = gameProperties;