console.log('js sourced');

var roundCounter = 0;
var goalNumber;
// var $playerArray = [{playerVal: $('#playerOne').val(), playerDiv: $('#playerOneGuessDiv')}, {playerVal: $('#playerTwo').val(), playerDiv: $('#playerTwoGuessDiv')}, {playerVal: $('#playerThree').val(), playerDiv: $('#playerThreeGuessDiv')}, {playerVal: $('#playerFour').val(), playerDiv: $('#playerFourGuessDiv')}];

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ sourced');
    $('#setupModeDiv').show();    
    $('#playModeDiv').hide();
    $('#startButtonEasy').hide();
    $('#startButtonMedium').hide();
    $('#startButtonHard').hide();
    $('#easyButton').on('click', easyMode);
    $('#mediumButton').on('click', mediumMode);
    $('#hardButton').on('click', hardMode);
    $(document).on('click', '#startButtonEasy', startGameEasy);
    $(document).on('click', '#startButtonMedium', startGameMedium);
    $(document).on('click', '#startButtonHard', startGameHard);
    $(document).on('click', '#submitGuessesButton', submitGuessesButtonClick);
    $(document).on('click', '#cancelGameButton', cancelGame);
    $(document).on('click', '#restartButton', cancelGame);

}

function easyMode(){
    $('#startButtonDiv').html('<button id="startButtonEasy">START!</button>');
}

function mediumMode(){
    $('#startButtonDiv').html('<button id="startButtonMedium">START!</button>');
}

function hardMode(){
    $('#startButtonDiv').html('<button id="startButtonHard">START!</button>');
}

function submitGuessesButtonClick() {
    console.log('startGameEasy working');
    roundCounter++;
    $('#roundCounter').html('You have made ' + roundCounter + ' guesses!');
    guessResults = '';
    guessResults += '<div id="playerOneGuessDiv"><span>Player One: ' + $('#playerOne').val() + '</span></div>';
    guessResults += '<div id="playerTwoGuessDiv"><span>Player Two: ' + $('#playerTwo').val() + '</span></div>';
    guessResults += '<div id="playerThreeGuessDiv"><span>Player Three: ' + $('#playerThree').val() + '</span></div>';
    guessResults += '<div id="playerFourGuessDiv"><span>Player Four: ' + $('#playerFour').val() + '</span></div>';
    $('#guessResultsDiv').html(guessResults);
    var $playerArray = [{playerVal: $('#playerOne').val(), playerDiv: $('#playerOneGuessDiv')}, {playerVal: $('#playerTwo').val(), playerDiv: $('#playerTwoGuessDiv')}, {playerVal: $('#playerThree').val(), playerDiv: $('#playerThreeGuessDiv')}, {playerVal: $('#playerFour').val(), playerDiv: $('#playerFourGuessDiv')}];
    
    for (var i = 0; i < $playerArray.length; i++) {
        if ($playerArray[i].playerVal == goalNumber){
            // console.log('PERFECT MATCH');
            $playerArray[i].playerDiv.append('<span> is a <b>PERFECT MATCH!</b></span>');
            $('#playAgainDiv').append('<button id="restartButton">RESTART</button>');
        } else if ($playerArray[i].playerVal < goalNumber){
            // console.log('too low');
            $playerArray[i].playerDiv.append('<span> is too low.</span>');
        } else if ($playerArray[i].playerVal > goalNumber){
            // console.log('too high');
            $playerArray[i].playerDiv.append('<span> is too high.</span>');
        }
    }
    

    $('input').val('');
}

function startGameEasy(){
    $('#setupModeDiv').hide();
    $('#playModeDiv').show();
    $('#guessIndicator').html('The Highest Number You Can Guess is: 10');

    $.ajax({
        method: "GET",
        url: "/easy",
        success: function (response) {
            console.log('submit guesses button click, response is:', response.number);
            goalNumber = response.number;
        }
    })
}

function startGameMedium(){
    $('#setupModeDiv').hide();
    $('#playModeDiv').show();
    $('#guessIndicator').html('The Highest Number You Can Guess is: 20');

    $.ajax({
        method: "GET",
        url: "/medium",
        success: function (response) {
            console.log('submit guesses button click, response is:', response.number);
            goalNumber = response.number;
        }
    })
}

function startGameHard(){
    $('#setupModeDiv').hide();
    $('#playModeDiv').show();
    $('#guessIndicator').html('The Highest Number You Can Guess is: 30');

    $.ajax({
        method: "GET",
        url: "/hard",
        success: function (response) {
            console.log('submit guesses button click, response is:', response.number);
            goalNumber = response.number;
        }
    })
}

function cancelGame() {
    readyNow();
}



// $.ajax({
//         method: "GET",
//         url: "/easy",
//         success: function (response) {
//             console.log('start easy game, response:', response);
//         }
//     })