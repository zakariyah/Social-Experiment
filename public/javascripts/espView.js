function showFirstPhase(content)
{
	var count = content.count + 1;
	var url = "asset/espFirstPhase/" + count + ".html";
	var htmlString = "<div><object type=\"text/html\" data=\"" + url + "\"></object>  </div>";
	htmlString += "<div><span id=\'timer\'></span></div>";
	htmlString += "<div class='progress'><div id='progressBarMain' class='progress-bar progress-bar-success progress-bar-striped active' role='progressbar' aria-valuenow='5' aria-valuemin='0' aria-valuemax='100' style='width: 5%;'></div></div>";
	document.getElementById('actions').innerHTML = htmlString;
	return htmlString;
}

function showSecondPhase(content)
{
	var htmlString = "<div class=\"alert alert-warning\"> PHASE 2 </div>";
	htmlString += ("<p> <strong class=\"alert alert-success\">Type in some words</strong></p><textarea rows=\"4\" cols=\"50\" id=\'first\' onclick=\'return setTimeOfEvent()\'> </textarea><div style='border: 1px #bce8f1 solid;   line-height: 120%;   font-size: 36px;  text-align: center; background-color: #d9edf7;   margin: 5px;'> <span id=\'timer\'></span> </div>" + "<div class='progress'><div id='progressBarMain' class='progress-bar progress-bar-success progress-bar-striped active' role='progressbar' aria-valuenow='5' aria-valuemin='0' aria-valuemax='100' style='width: 5%;'></div></div>"); 
	document.getElementById('actions').innerHTML = htmlString;
	return htmlString;
}

function showThirdPhase(content)
{
	if(content.phase2Utilities == 0)
		return "";
	var briefAnswer = "<div class=\"alert alert-warning\"> PHASE 3 </div>";
	var randomLabel = content.phase2Utilities.playerChoiceWasRandom ? "<span class=\"badge  pull-right\">R</span>" : "";
	var yourChoice = content.phase2Utilities.playerChoiceWasRandom ? "You did not choose anything" : content.phase2Utilities.playerChoice;
	briefAnswer += "<div class=\"alert alert-warning\"> Round " + content.phase2Utilities.round + " results</div>";
	briefAnswer += "<table class='table table-bordered'><tr><td></td><td></td><td> You got</td></tr>";
	briefAnswer += "<tr><td>Your Choice : </td><td>" + yourChoice + randomLabel + "</td><td></td></tr>";
	briefAnswer += "<tr><td>Opponent Choice : </td><td>" + content.phase2Utilities.opponentChoice+ "</td><td></td></tr>";
	briefAnswer += "<tr><td>Total points</td><td></td><td>" + content.phase2Utilities.total + "</td></tr></table>";
	briefAnswer += "<p id='nextRoundCounter'> Next round starts in " + content.phasesDuration[2] + " seconds</p>";
	briefAnswer += "<div class='progress'><div id='progressBar' class='progress-bar progress-bar-striped progress-bar-danger active' role='progressbar' aria-valuenow='5' aria-valuemin='0' aria-valuemax='100' style='width: 5%;'></div></div>";

	return briefAnswer;
}

function changeProgressBar(barId, rvalue, totalValue)
{
  var value = totalValue - rvalue;
  var ariaNow = value  * 100.0 / totalValue;
  var progressBar = document.getElementById(barId);
  progressBar.style.width = Math.floor(ariaNow) + "%";
}

function makeSelectionImpossible()
{
  document.getElementById('first').disabled = true; 
}