// important
var gameProperties = require('./gameProperties');
var answer = function(value) //give the matrix as a 4 by 4 array e.g (A, B, 1, 5)
{

	var answerValueType = gameProperties.setChosenAnswerValueAndType(value);
	this.chosenAnswer = answerValueType[0];
	this.answerType = answerValueType[1];
};

module.exports = answer;