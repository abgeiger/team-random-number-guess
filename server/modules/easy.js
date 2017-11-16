// var express = require('express');
// var router = express.Router();
// var randomNumber = require('./randomNumber')

// function randomNumber(min, max){
//     var randomNumber = Math.floor(Math.random() * (1 + max - min) + min);
//     // return (randomNumber).toString();
//     return (randomNumber);


function easyMode() {
    // console.log('easyMode launch');
    // return 4;
    var outputString = '';
    outputString += '<p>Highest number you can guess: 10</p>';
    outputString += '<p>Player 1: <input id="playerOne" type="number" placeholder="Guess"></p>';
    outputString += '<p>Player 2: <input id="playerTwo" type="number" placeholder="Guess"></p>';
    outputString += '<p>Player 3: <input id="playerThree" type="number" placeholder="Guess"></p>';
    outputString += '<p>Player 4: <input id="playerFour" type="number" placeholder="Guess"></p>';
    outputString += '<button id="submitGuessesButton">SUBMIT GUESSES</button>';
    outputString += '<p>You have made no guesses.</p>';

    return outputString;
}

module.exports = easyMode;
