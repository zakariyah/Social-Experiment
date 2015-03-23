function player(id)
{
	this.id = id;
	this.gameChoices = ["A", "B"];
	this.connected = true;
	this.history = [];
	this.addToHistory =  function(arrayOfValues){
		this.history.push(arrayOfValues) //[choice, value, opponentchoice, opponentvalue]);
	};

	var gameProperties = require('../controller/gameProperties');
	this.gameMatrix = gameProperties.gameMatrix;
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
	// var color1 = " label-danger";
	// html = "<table class=\"table table-bordered\"><tr><td>Round</td><td>Your Choice </td> <td>Participant Choice </td> <td> Your score </td></tr>";
	// 	html += " <tr><td colspan=3> <h3><span class=\"label label-primary\">CUMMULATIVE SCORE </span></h3></td><td>" +
	// 	"<h3><span class=\"label " + color1 + "\">" + this.getCummulativeValue() +
	// 	        "</span></h3></td></tr>";
	// 	var randomBadge = "<span class=\"badge  pull-right\">R</span>";
	// 	var color1 = (this.getCummulativeValue() > this.getOpponentCummulativeValue()) ? " label-info " : " label-danger";
	// 	var color2 = (this.getCummulativeValue() < this.getOpponentCummulativeValue()) ? " label-info " : " label-danger";
	// 	toBeAddedAll = "";
	// 	for(var i = 0; i < this.history.length; i++)
	// 	{
	// 		toBeAdded = " <tr><td>"+ (i + 1) + "</td><td>" + this.gameChoices[this.history[i][0] - 1] + " " +
	// 			((this.history[i][4] == 0) ? randomBadge : "") +
	// 		"</td><td>" + this.gameChoices[this.history[i][2] - 1] + " " +
	// 		((this.history[i][5] == 0) ? "" : "") +	
	// 		"</td><td>" + this.history[i][1] + "</td></tr>";			
	// 		toBeAddedAll = toBeAdded + toBeAddedAll;
	// 	}
	// 	html += toBeAddedAll;
	// 	html += "</table>";


		// var briefAnswer = "";
		var briefAnswer = {};
		var lastIndex = this.history.length - 1;
		briefAnswer.playerChoice = this.gameChoices[this.history[lastIndex][0] - 1];
		briefAnswer.opponentChoice = this.gameChoices[this.history[lastIndex][2] - 1];
		briefAnswer.playerGotFromItself = this.gameMatrix[this.history[lastIndex][0] - 1][0];
		briefAnswer.playerGotFromOpponent = this.gameMatrix[this.history[lastIndex][2] - 1][1];
		briefAnswer.total = briefAnswer.playerGotFromItself + briefAnswer.playerGotFromOpponent;
		briefAnswer.playerChoiceWasRandom = (this.history[lastIndex][4] == 0);
		// var randomLabel = playerChoiceWasRandom ? "<span class=\"badge  pull-right\">R</span>" : "";
		// briefAnswer += "<table class='table table-bordered'><tr><td></td><td></td><td> You got</td></tr>";
		// briefAnswer += "<tr><td>Your Choice : </td><td>" + playerChoice + randomLabel + "</td><td>" + playerGotFromItself+"</td></tr>";
		// briefAnswer += "<tr><td>Opponent Choice : </td><td>" + opponentChoice+ "</td><td>" + playerGotFromOpponent +"</td></tr>";
		// briefAnswer += "<tr><td>Total</td><td></td><td>" + total + "</td></tr></table>";

		
		// briefAnswer += "<p id='nextRoundCounter'> Next round starts in 10 seconds</p>";
		// briefAnswer += "<div class='progress'><div id='progressBar' class='progress-bar progress-bar-striped progress-bar-danger active' role='progressbar' aria-valuenow='5' aria-valuemin='0' aria-valuemax='100' style='width: 5%;'></div></div>";

		

		return  briefAnswer;
	};
}

module.exports = player;