console.log('js sourced');

var roundCounter = 0;

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ sourced');
    $('#easyButton').on('click', easyMode);
    $('#mediumButton').on('click', mediumMode);
    $('#hardButton').on('click', hardMode);
    $(document).on('click', '#startButtonEasy', startGameEasy);
    $(document).on('click', '#submitGuessesButton', guessCounter);

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

function guessCounter() {
    console.log('startGameEasy working');
    roundCounter++;
    $('#roundCounterTaco').html('You have made ' + roundCounter + ' guesses!');
}

function startGameEasy(){
    $('#setupModeDiv').hide();
}

// $.ajax({
    //     method: "GET",
    //     url: "/easy",
    //     success: function (response) {
    //         console.log('start easy game, response:', response);
    //     }
    // })