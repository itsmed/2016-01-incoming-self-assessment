$(document).ready(function(){
	
	event.preventDefault();

	//on start click, take in userName and take us to game play
	// $('#start').click(function(e) {
	// 	e.preventDefault();
	// 	userName = $('.userName').val();
	// 	console.log(userName);
	// 	window.location.href="game.html";
	// });

	$('.navbar-brand').click(function() {
		$('.userName').val('');
	});
	// our current count, attached to the upper right hand corner of the browser
	var $currentCount = $('#counter');
	// our current form which will hold the question and subsequent answers loaded in the app.questions object.
	var $currentForm = $('form');
	// creates our first random question upon generating the game.html file
	var randomQuestion = app.questions[Math.floor(Math.random()* app.questions.length)];
	
	//attaches the counter to the highscore on page
	$('#counter').text(app.count);

	//attaches the first question to the form onload
	$currentForm.prepend('<h3 class = "question"> Question: ' + randomQuestion.question + '</h3>' + '<br><br>');

	// appends all four answers to the corresponding question
	var answerGenerator = function (randomQuestion){

		//assign the randomQuestion to a variable
		var that = randomQuestion;


		console.log(that.correct);
		
		//loop through the answer choices
		for (var i = 0; i < that.choices.length; i++) {
		
		//assign the answers to a variable inseide of a div
		var $answer = $('<div class"answer"><input type="radio" name="user_answer" value="' + that.choices[i] +'">'+ '&nbsp &nbsp' + that.choices[i]+'</input></div>');

			//append each answer to the currentForm
			$currentForm.append($answer);
		}
	};

	//adds a random question and its corresponding answers to our currentForm
	var QandAgenerator = function(){

		//select a random question from the app.questions array
		newQuestion = app.questions[Math.floor(Math.random() * app.questions.length)];
		console.log(newQuestion);
		//prepend to the currentForm as was done on line 15 (for similair styling's sake)
		$currentForm.prepend('<h3 class = "question"> Question: ' + newQuestion.question + '</h3>' + '<br><br>');
		//call answerGenerator, with the randomly selected question as the argument
		answerGenerator(newQuestion);
	};

	// checks the answer when the user clicks "Am I right?"
	$('#checkAnswer').on('click',function(){
		event.preventDefault();
		// represents whichever check box the user clicks on
		alert($('input:checked').val());

		//assign the value from input:checked to userInput
		$userInput = $('input:checked').val();

		if( ($userInput == randomQuestion.correct) || ($userInput == newQuestion.correct) ){
			app.successDisplay();
			app.countIncrementor();
			$currentCount.empty().append(app.count);
			$('.choices').empty().append(QandAgenerator());
		} else {
			app.failureDisplay();
		}
	});

	$('#restart').on('click', function(){
		location.reload();
	});

	answerGenerator(randomQuestion);
});

