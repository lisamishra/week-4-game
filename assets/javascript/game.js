$(document).ready(function () {

	var numbersArray = [];
	var wins = 0;
	var loss = 0;
	var currentScore = 0;

// Matched number

	var matchNum = Math.floor(Math.random() * 102 + 19)
	$("#match").text(" " +matchNum);


// Crystal Numbers

	function crystalNum() {
		for (var i = 0; i < 4; i++) {
			var x = Math.floor(Math.random() * 12 + 1);
			numbersArray.push(x);
		}

	}

crystalNum();	

//Win Count
	function winCount(){
		wins++;
		$("#wins").text(" " + wins)
		reset()
	}

// Loss Count
	function lossCount(){
		loss++;
		$("#loss").text(" " + loss)
		reset()
	}
	
	function reset () {
		numbersArray = [];
		matchNum = Math.floor(Math.random() * 102 + 19)
		crystalNum ();
		$("#match").text(" " +matchNum);
		currentScore = 0;
		$("#score").text(" " + currentScore);
	}
	
// Crystal Functions

	$("#blue").on ('click', function () {
		currentScore = currentScore + numbersArray[0];
		$("#score").text(" " + currentScore)

		if (currentScore == matchNum) {
			winCount();
		}

		else if (currentScore > matchNum) {
			lossCount();
		}
	})

	$("#green").on ('click', function () {
		currentScore = currentScore + numbersArray[1];
		$("#score").text(" " + currentScore)

		if (currentScore == matchNum) {
			winCount();
		}

		else if (currentScore > matchNum) {
			lossCount();
		}
	})

	$("#orange").on ('click', function () {
		currentScore = currentScore + numbersArray[2];
		$("#score").text(" " + currentScore)

		if (currentScore == matchNum) {
			winCount();
		}

		else if (currentScore > matchNum) {
			lossCount();
		}
	})

	$("#purple").on ('click', function () {
		currentScore = currentScore + numbersArray[3];
		$("#score").text(" " + currentScore)

		if (currentScore == matchNum) {
			winCount();
		}

		else if (currentScore > matchNum) {
			lossCount();
		}
	})

});
