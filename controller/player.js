var gameProperties = require('./gameProperties');
function player(id)
{
	this.id = id;
	// this.gameChoices = gameProperties.optionMatrix;
	this.connected = true;
	this.history = [];
	this.addToHistory =  function(arrayOfValues){
		this.history.push(arrayOfValues) //[choice, value, opponentchoice, opponentvalue, playerrandom, opponentRandom]);
	};

	// var gameProperties = require('../controller/gameProperties');
	// this.gameMatrix = gameProperties.gameMatrix;
	this.getCummulativeValue = function()
	{
		cummulative = 0;
		for(var i = 0; i < this.history.length; i++)
		{
			cummulative += this.history[i][1];
		}
		return cummulative;
	};

	this.getOpponentCummulativeValue = function()
	{
		cummulative = 0;
		for(var i = 0; i < this.history.length; i++)
		{
			cummulative += this.history[i][3];
		}
		return cummulative;
	};

	this.printResults = function()
	{
		var lastIndex = this.history.length - 1;
		var lastHistory = this.history[lastIndex];
		return  gameProperties.getBriefAnswerFromHistory(lastHistory);
	};
}

module.exports = player;