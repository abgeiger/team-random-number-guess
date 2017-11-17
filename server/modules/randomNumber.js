function randomNumber(min, max){
    var randomNumber = Math.floor(Math.random() * (1 + max - min) + min);
    // return (randomNumber).toString();
    return (randomNumber);
}

module.exports = randomNumber;