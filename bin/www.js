#!/usr/bin/env node

require('./argumentParser'); 
var debug = require('debug')('my-application');
var app = require('../app');
var io = require('socket.io');
var connecter = require('../database');
connecter('mongodb://localhost/scailabexperiment');
var gameController = require('../controller/gameController');
var gameplayer = require('../controller/gameplayer');
var gameProperties = require('../controller/gameProperties');
var playerHiitNumberMap = {};

app.set('port', process.env.PORT || 4000);
var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
var ionew = io.listen(server);


var gamecontroller = new gameController(2);
var gameMap = {};
var gameStartStatus = false;


var numberOfGameControllers = 200;
var gameControllerArray = [];
var numberOfPairs = 0;
var gameCounter = 0;
var firstPlayerJustEntered = true;
var playersSocketDict = {};

var gameTypes = gameProperties.gameTypes; 

ionew.sockets.on('connection', function (socket) {
	socket.on('waitingTimeElapsed', function()
	{
			if(!(socket.id in gameMap)) // if player has not been already mapped
			{
				var player = new gameplayer(gameCounter + "agent", null, true, 1, playerHiitNumberMap[gameCounter + "agent"]); //agents dont have socket
				if(typeof gameControllerArray[gameCounter] === 'undefined')
				{
					return;  // what should be done
				}
				gameControllerArray[gameCounter].addPlayer(player);
				if(gameControllerArray[gameCounter].isFilled())
				{
					startGame();
					firstPlayerJustEntered = true;
					sendMessageAndStart();
				}
					else
				{
					firstPlayerJustEntered = false;
				}
				gameCounter += 1;
			}
			
	});

	socket.on('join', function(hiitNumber)
	{
		if(firstPlayerJustEntered)
		{
			gameControllerArray[gameCounter] = new gameController(2);			
		}
		else
		{

		}
		playerHiitNumberMap[socket.id] = hiitNumber; // mapping socketid to hiitNumber.
		// get Game type
			var gameTypeIndex = gameCounter % gameTypes.length;
			var presentGameType = gameTypes[gameTypeIndex];
			startGameTypeForTheNextTwoPlayers(presentGameType);		
	});

	function startGameTypeForTheNextTwoPlayers(gameType)
	{
		// if normal
		if(gameType == 'normal')
		{
		
			var player = new gameplayer(gameCounter, socket, false, 1, playerHiitNumberMap[socket.id]);
			gameControllerArray[gameCounter].addPlayer(player);
			if(gameControllerArray[gameCounter].isFilled())
			{
				startGame();
				firstPlayerJustEntered = true;
			}
			else
			{
				firstPlayerJustEntered = false;
			}
		}		
		
		playersSocketDict[socket.id] = gameCounter; // dictionary to be used for getting players later on

		if(gameControllerArray[gameCounter].isFilled())
		{
			sendMessageAndStart();
			gameCounter += 1;		
		}

	}

	function startGame()
	{
		var playersId = Object.keys(gameControllerArray[gameCounter].gamePlayers); // createAgentToBeAddedToRooms();
		mapOutPlayers(playersId);
	}

	function sendMessageAndStart()
	{
		for(var i in gameControllerArray[gameCounter].gamePlayers)
			{
				// var message = "Your opponent's id is " + gameMap[i];
				if( !gameControllerArray[gameCounter].gamePlayers[i].isAgent)
				{
					// if(gameControllerArray[gameCounter].gamePlayers[i].hasRecommender)
					// {
					// 	message += " But don't worry, you have a recommender ";
					// }
						var playerToSendMessage = gameControllerArray[gameCounter].gamePlayers[i];
						var roomObject = gameControllerArray[gameCounter].gameRooms[playerToSendMessage.id]; 
						var numberOfRounds = roomObject.getGameRounds();
						var recommenderOption = playerToSendMessage.hasRecommender ? 1 : 0;
						var recc = playerToSendMessage.getRecommendation();
playerToSendMessage.sessionSocket.emit('serverMessage', {count : 0, phase2Utilities : 0, rounds : numberOfRounds, phase1Duration : gameProperties.phase1Duration, phasesDuration:gameProperties.phasesDuration});
// phase2Utilities is zero because of first round
// phasesDuration specific to esp game for now
						gameProperties.phase1Utilities.round = 0;
						playerToSendMessage.sessionSocket.emit('start', gameProperties.phase1Utilities);
				}
			}
	}

	function mapOutPlayers(playersId)
	{
		for (var i = 0; i < playersId.length; i++)
		{
			var playerId = playersId[i];
			if(i % 2 == 0)
			{
				gameMap[playerId] = playersId[i + 1]
				gameControllerArray[gameCounter].setPlayersToRoom(playerId, playersId[i + 1] );
			}	
			else
			{
				gameMap[playerId] = playersId[i - 1];
				gameControllerArray[gameCounter].pointSecondPlayerToRoom(playerId, playersId[i - 1], Math.floor(i/2));
			}
		};
	} 

	function getServerMessage(store, soc, roomObject)
	{
		var cummScore = store.players[soc.id].getCummulativeValue();
			var message = {count : store.round, rounds : roomObject.getGameRounds(), cumm: cummScore};
			message.phase2Duration = gameProperties.phase2Duration;
			message.phase1Duration = gameProperties.phase1Duration;
			message.phase1Utilities = gameProperties.phase1Utilities;
			message.phase1Utilities.round = store.round;
			message.phase2Utilities = store.players[soc.id].printResults();
			message.phase2Utilities.round = store.round; // present round
			message.phase2Utilities.duration = gameProperties.phase2Duration;
			message.phasesDuration = gameProperties.phasesDuration;
			return message;
	}

	socket.on('clientMessage', function(content) {
		var presentSocketGameCounter = playersSocketDict[socket.id];
		if(typeof presentSocketGameCounter === 'undefined')
		{
			return;
		}
		roomNumber =  gameControllerArray[presentSocketGameCounter].roomToSocket[socket.id]; //	roomToSocket[socket.id];
		store = gameControllerArray[presentSocketGameCounter].answerStores[roomNumber];


	if(store)
	{
		var roomObject = gameControllerArray[presentSocketGameCounter].gameRooms[socket.id]; 
		store.addAnswer(content.gamePlay, gameControllerArray[presentSocketGameCounter].gamePlayers[socket.id]);
		gameControllerArray[presentSocketGameCounter].gamePlayers[socket.id].setTimeOfAction(content.timeOfAction);
		// var messageText = "<div class=\"alert alert-warning\"> Round " + store.round + " results</div>";


		if(roomObject.agentPresent)  //if agent is present in the game
		{
			var opponent = gameMap[socket.id];  //get agent id.
			var agentMove = roomObject.player2.nextMove(content.gamePlay);
			store.addAnswer(agentMove, gameControllerArray[presentSocketGameCounter].gamePlayers[opponent]);
			// var recc = gameControllerArray[presentSocketGameCounter].gamePlayers[socket.id].getRecommendation();
			// var text = store.players[socket.id].printResults();
			// var cummScore = store.players[socket.id].getCummulativeValue();
			// var message = {count : store.round, rounds : roomObject.getGameRounds(), cumm: cummScore};
			// message.phase2Duration = gameProperties.phase2Duration;
			// message.phase1Duration = gameProperties.phase1Duration;
			// message.phase1Utilities = gameProperties.phase1Utilities;
			// message.phase2Utilities = store.players[socket.id].printResults();
			// message.phase2Utilities.round = store.round; // present round
			socket.emit('serverMessage', getServerMessage(store, socket, roomObject));
			store.clear();
		}

		else // if agent is not present
		{
			if(store.isFilled())
			{
				var soc1 = roomObject.player1;
				var soc2 = roomObject.player2;
				if(!soc1.isAgent)
				{ // returns null if it has no recommender and also does nothing in update recommender
					soc1.updateRecommender(store.answererSet[soc1.id].chosenAnswer, store.answererSet[soc2.id].chosenAnswer);
					soc1.sessionSocket.emit('serverMessage', getServerMessage(store, soc1, roomObject));						
				}
				else
				{
					// take care of agents !!!	 already taken care of. Just trying to play safe
				}

				if(!soc2.isAgent)
				{
					soc2.updateRecommender(store.answererSet[soc2.id].chosenAnswer, store.answererSet[soc1.id].chosenAnswer);
					soc2.sessionSocket.emit('serverMessage', getServerMessage(store, soc2, roomObject));						
				}
				else
				{
					// take care of agents !!!
				}
				store.clear();
			}	
		}
		
	}
});


socket.on('disconnect', function()
{
	// console.log("disconnect was called " + socket.id);
	var presentSocketGameCounter = playersSocketDict[socket.id];
		if(typeof presentSocketGameCounter === 'undefined')
		{
			return;
		}
		else if(typeof gameControllerArray[presentSocketGameCounter] === "undefined")
		{
			// a case where a previous game sends a disconnect message
			return;
		}

	var roomNumber =  gameControllerArray[presentSocketGameCounter].roomToSocket[socket.id]; //	roomToSocket[socket.id];
	// roomNumber =  gamecontroller.roomToSocket[socket.id]; //	roomToSocket[socket.id];
	var gamePlayerPresent = gameControllerArray[presentSocketGameCounter].gamePlayers;
	if(gamePlayerPresent) // truthy
	{
		if(Object.keys(gamePlayerPresent).length == 1)
		{
			gamePlayerPresent[socket.id].connected = false;
			gameControllerArray[presentSocketGameCounter].firstPlayerAlreadyDisconnected = true;
		}
	}
	store = gameControllerArray[presentSocketGameCounter].answerStores[roomNumber];
	opponentId = gameMap[socket.id];
	if(store)
	{
	var roomObject = gameControllerArray[presentSocketGameCounter].gameRooms[socket.id]; 
		if(!roomObject.agentPresent)
		{
			if(roomObject.gameRounds <= store.round)
			{
				return;
			}
		store.addAnswer(gameProperties.getNoActionVale(), gameControllerArray[presentSocketGameCounter].gamePlayers[socket.id]);
		store.setPlayerConnectedStatusToFalse(socket.id);
		var messageText = "<div class=\"alert alert-warning\"> Round " + store.round + " results</div>";
		if(store.isFilled()) //when does this happen !!!
			{	
				opponentPlayerObject = gameControllerArray[presentSocketGameCounter].gamePlayers[opponentId];	
				opponentPlayerObject.updateRecommender(store.answererSet[opponentId].chosenAnswer, store.answererSet[socket.id].chosenAnswer);
				var cummScore = store.players[opponentId].getCummulativeValue();
				var message = {count : store.round, text : (messageText  + " " + store.players[opponentId].printResults()), rounds : roomObject.getGameRounds(), cumm:cummScore, recommendation : opponentPlayerObject.getRecommendation()};
				gameControllerArray[presentSocketGameCounter].gamePlayers[opponentId].sessionSocket.emit('disconnectMessage', {cummScoreK : cummScore, roundK : store.round});
				store.clear();
			}
			else
			{ // store is not filled
				roomObject.gameRounds = store.round;  // set the present round to last round to end the game
			}	
		}
	}
});


});