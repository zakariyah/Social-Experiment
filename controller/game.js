var gameProperties = require('./gameProperties');
// give the matrix as a 4 by 4 array e.g (A, B, 1, 5)
function game(gameName, optionsAndValue) 
//the matrix is called pdGameMatrix
{
	// this.choices  = ['A', 'B'];
	this.gameName = gameName;
	this.optionsAndValue = optionsAndValue;
	// this.options = {};
	// for(var i = 0; i < this.optionsAndValue.length; i++)
	// {
	// 	option = (this.optionsAndValue[i][0] + "" +  this.optionsAndValue[i][1]);
	// 	valueGiven = [this.optionsAndValue[i][2], this.optionsAndValue[i][3]];
	// 	this.options[option] = valueGiven;
	// }
	this.getPlayerPayoff = function(optionChosen, playerNumber)
	{
		// optionChosen = (this.choices[optionChosen[0] - 1] + "" +  this.choices[optionChosen[1] -1]);
		// if(playerNumber == 2)
		// {
		// 	optionChosen =  optionChosen.split("").reverse().join("");
		// }
		// values = this.options[optionChosen];
	
		// if(values)
		// return values[0];
		// else
		// return -1;

		return gameProperties.calculator(optionChosen, playerNumber);
	}
};

// newgame = new game('second', [['A', 'B', 0, 5], ['B', 'A', 5, 0], ['A', 'A', 3, 3], ['B', 'B', 1, 1]]);

module.exports = game;