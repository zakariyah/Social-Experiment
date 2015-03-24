var moves = require('./model/actionmodel');
var pd = require('./gamesConfig/prisonersDilemma.json');
pd.gameTypes  =    [ 'normal'
];
pd.gamePhase1 = "";
pd.gamePhase2 = "";
pd.gamePhase3 = "";




pd.gameRounds = function()
{
	// returns leastNumberOfRounds + a number less than or equal to variableAdditionOfRounds
	return pd.leastNumberOfRounds + Math.floor((Math.random() * pd.variableAdditionOfRounds));
}

pd.calculator = function(optionChosen, playerNumber) //yourChoice, opponentChoice)
{
	// returns the player Number payoff. player number can be 1 or 2
	// option chosen is a list of length 2 containing player1choice then player2choice
	if(playerNumber == 2)
	{
		optionChosen = [optionChosen[1], optionChosen[0]]; 
	}
	var gottonFromPlayer = pd.gameMatrix[optionChosen[0] - 1][0];
	var gottenFromOpponent = pd.gameMatrix[optionChosen[1] - 1][1];
	var total = gottonFromPlayer + gottenFromOpponent;
	return total;
}

pd.getBriefAnswerFromHistory = function(lastHistory)
{
		var briefAnswer = {};
		
		briefAnswer.playerChoice = pd.optionMatrix[lastHistory[0] - 1];
		briefAnswer.opponentChoice = pd.optionMatrix[lastHistory[2] - 1];

		// briefAnswer.playerChoice = this.history[lastIndex][0]; // returns 1 or 2
 		// briefAnswer.opponentChoice = this.history[lastIndex][2]; // returns 1 or 2
		// var optionsChosen = [lastHistory[0], lastHistory[2]]
		briefAnswer.playerGotFromItself = pd.gameMatrix[lastHistory[0] - 1][0];
		briefAnswer.playerGotFromOpponent = pd.gameMatrix[lastHistory[2] - 1][1];
		briefAnswer.total = lastHistory[1];
		// briefAnswer.total = briefAnswer.playerGotFromItself + briefAnswer.playerGotFromOpponent;
		briefAnswer.playerChoiceWasRandom = (lastHistory[4] == 0);

		return briefAnswer;
}

pd.saveOneRoundToDatabase = function(move)
{
	moves.createMove(move);
}

pd.setChosenAnswerValueAndType = function(value)
{ // dealing with random in pd
	var answerTypeValue = [];
	if(value == 0)
	{
		answerTypeValue[0]  = Math.floor(Math.random() * 2) + 1;
		answerTypeValue[1] = 0;  //response trigerred after a period of inactivity: Random value generated
	}
	else
	{
		answerTypeValue[0]  = value;
		answerTypeValue[1] =  1;
	}		
	return answerTypeValue;
}
module.exports = pd;