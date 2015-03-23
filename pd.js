var pd = require('./gamesConfig/prisonersDilemma.json');
pd.gameTypes  =    [ 'normal'
];
pd.gamePhase1 = "";
pd.gamePhase2 = "";
pd.gamePhase3 = "";
pd.calculator = "pdCalculator";



pd.gameRounds = function()
{
	// returns leastNumberOfRounds + a number less than or equal to variableAdditionOfRounds
	return pd.leastNumberOfRounds + Math.floor((Math.random() * pd.variableAdditionOfRounds));
}

module.exports = pd;