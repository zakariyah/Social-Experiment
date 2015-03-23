// This class creates the called agent and supply it with it needed characters. 
//It also helps store the state of the game for the agent. It is what defines the agent next move.


var agent = function(nombre, playerIndex, payOffMatrix, lambda, isRandom) // nombre, _me, _A[2], _M, _lambda, _game[1024]
{
	this.payOffMatrix =  payOffMatrix;
	this.isRandom = isRandom;

	this.getNormalizedPayoff = function(payoffs)
	{
		var minimumPayoff = Math.min.apply(Math, payoffs);
		if(minimumPayoff < 0)
		{
			for(var i = 0; i < payoffs.length; i++)
			{
				payoffs[i] = payoffs[i] - minimumPayoff; // shift to zero
			}	
		}

		var maximumPayoff = Math.max.apply(Math, payoffs);
		for(var i = 0; i < payoffs.length; i++)
		{
			payoffs[i] /= maximumPayoff;
		}
		return payoffs;
	}

	this.buildPayoffMatrix = function()
	{
		// try and get what M is and use it to build this.
		var myM = [];
		myM[0] = [];
		myM[1] = [];
		var gameProperties = require('./gameProperties');
		var pdGameMatrix = gameProperties.pdGameMatrix;
		// myM[0][0] = [0.6, 0];
		// myM[0][1] = [1, 0.2];
		// myM[1][0] = [0.6, 1];
		// myM[1][1] = [0, 0.2];
		var payoffs = [pdGameMatrix[0][2], pdGameMatrix[1][2], pdGameMatrix[2][2], pdGameMatrix[3][2]];
		payoffs = this.getNormalizedPayoff(payoffs);
		//  for new matrix
		myM[0][0] = [payoffs[2], payoffs[0]];
		myM[0][1] = [payoffs[1], payoffs[3]];
		myM[1][0] = [payoffs[2],payoffs[1]];
		myM[1][1] = [payoffs[0], payoffs[3]];
		return myM;
	}
	
	this.M = this.buildPayoffMatrix();


	var jefe_plus  = require('../hagent/jefe_plus.js');
	
	this.myJefePlus = new jefe_plus(nombre, playerIndex, payOffMatrix, this.M,  lambda); // get those variables
	
	this.createMove = function()
	{ 
		if(this.isRandom)
		{
			return Math.floor((Math.random() + 0.5));
		}
		return this.myJefePlus.move(); // returns 0 for cooperate and 1 for defect
	}	

	this.update = function(acts)
	{
		// This is to be called after the createMove.
		// acts is an array with the first element the agent's move and the second element
		// its opponent move.
		this.myJefePlus.update(acts);
	}

	this.getAgentState = function()
	{
		// the method is to print out the user state.
		return this.myJefePlus.experto;
	}
}

module.exports = agent;