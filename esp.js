var moves = require('./model/espactionmodel');
var esp = require('./gamesConfig/espGame.json');
esp.gameTypes  =    [ 'normal'
];
esp.gamePhase1 = "";
esp.gamePhase2 = "";
esp.gamePhase3 = "";




esp.gameRounds = function()
{
	// returns leastNumberOfRounds + a number less than or equal to variableAdditionOfRounds
	return esp.leastNumberOfRounds + Math.floor((Math.random() * esp.variableAdditionOfRounds));
}

esp.calculator = function(optionChosen, playerNumber) //yourChoice, opponentChoice)
{
	// returns the player Number payoff. player number can be 1 or 2
	// option chosen is a list of length 2 containing player1choice then player2choice
	if(playerNumber == 2)
	{
		optionChosen = [optionChosen[1], optionChosen[0]]; 
	}
	if(optionChosen[0] === "" || optionChosen[1] === "")
	{
		return 0;
	}
	var opponentWords = optionChosen[1].trim().split(" ");
	var yourWords = optionChosen[0].trim().split(" ");
	var opponentWordsSet = {};
	for(var i = 0; i < opponentWords.length; i++)
	{
		opponentWordsSet[opponentWords[i]] = true;
	}

	// calculate score
	var score = 0;
	for(var i = 0; i < yourWords.length; i++)
	{
		if(yourWords[i] in opponentWordsSet)
		{
			score += 1;
		}
	}

	return score; // compares words and give values
	
}

esp.getBriefAnswerFromHistory = function(lastHistory)
{
		var briefAnswer = {};
		
		briefAnswer.playerChoice = lastHistory[0] ;
		briefAnswer.opponentChoice = lastHistory[2];

		briefAnswer.playerGotFromItself = 5;
		briefAnswer.playerGotFromOpponent = 5
		briefAnswer.total = lastHistory[1];
		// briefAnswer.total = briefAnswer.playerGotFromItself + briefAnswer.playerGotFromOpponent;
		briefAnswer.playerChoiceWasRandom = (lastHistory[4] == 0);

		return briefAnswer;
}

esp.saveOneRoundToDatabase = function(move)
{
	moves.createMove(move);
}

esp.setChosenAnswerValueAndType = function(value)
{
	// dealing with random in esp
	var answerTypeValue = [];
	if(value == 0)
	{
		answerTypeValue[0]  = "";
		answerTypeValue[1] = 0;  //response trigerred after a period of inactivity: Random value generated
	}
	else
	{
		answerTypeValue[0]  = value;
		answerTypeValue[1] =  1;
	}	
	return answerTypeValue;
}
module.exports = esp;