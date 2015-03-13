#!/usr/bin/env node
var debug = require('debug')('my-application');

var app = require('../app');
var io = require('socket.io');
console.log("running this");
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

