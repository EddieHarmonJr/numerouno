// var readline = require('readline');
// var r = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function clear() {
//   process.stdout.write('\u001B[2J\u001B[0;0f');
// }

// var title = '\nEscape from Duck Dungeon\n';
//     title += '<--------------->\n\n';

// var map = [
//   ['c4q office', 'mobile class', 'fsw class', 'smash lounge'],
//   ['hallway', 'hallway', 'kitchen', 'hallway'],
//   ['other office 1', 'restrooms', 'elevator', 'other office 2']
// ];
// var turns = 7;
// var coordX = 0;
// var coordY = 2;

// clear();
// console.log( title );
// console.log('You must escape before you a killed by a duck!');
// console.log('Good luck.\n');
// console.log( 'You are in the ' + map[coordX][coordY].toUpperCase() + '.');
// r.setPrompt('enter N/S/E/W: ');
// r.prompt();

// r.on('line', function(input) {
//   console.log('');
//   if( !'nsewNSEW'.includes(input) ) {
//     console.log('bad input, minus one turn');
//   } else {
//     if ('eE'.includes(input)) {
//       coordX += 1;
//     } else if ('wW'.includes(input)) {
//       coordX -= 1;
//     } else if ('nN'.includes(input)) {
//       coordY += 1;
//     } else if ('sS'.includes(input)) {
//       coordY -= 1;
//     }
//   }
//   turns -= 1;

//   if (!map[coordX] || !map[coordX][coordY]) {
//     console.log('You fall to your death. Game over.');
//     return r.close();
//   }
//   console.log('You are in the ' + map[coordX][coordY].toUpperCase() + '.');

//   if (map[coordX][coordY] === 'elevator') {
//     console.log('You escape down the elevator. YOU WIN!');
//     console.log('(you hear the anguished cry of one giant duck)');
//     return r.close();
//   }

//   console.log('You have ' + turns + ' turns left.');
//   if (!turns) {
//     console.log('One giant duck eats you before you escape. Game over.');
//     return r.close();
//   }
//   r.prompt();
// });
















/*
 *   Boilerplate
 */


'use strict';

var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear () {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

// End of boilerplate

/**
 * @function returns a random number between min and max
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
function getRandomNumber (min, max) {
  return Math.round(Math.random() * (max - min)) + min
}

var previousGuesses = []

/**
 * @function Game
 * @param  {Number} number {the number to guess}
 * @param  {Number} triesLeft {number of attempts }
 * @param  {Boolean} win
 * @param  {String} message
 * @return {Game} a Game object
 */
function Game (number, triesLeft, gameOver, message) {
  var game = {
    number: number,
    triesLeft: triesLeft,
    gameOver: gameOver,
    message: message
  }
  return game
}

/**
 * @function updateGame
 * @param {Game}
 * @param {Number} guess
 * @param {Game} The updated game
 */
function updateGame (game, guess) {
  var number = game.number
  var triesLeft = game.triesLeft - 1
  var message = ''
  var gameOver

  if (triesLeft === 0) {
    gameOver = true
    console.log('Your previous guesses were: ')
    console.log(previousGuesses)
    message = 'You Lose'
    console.log(message)
    
  } else if (previousGuesses.includes(guess)) {
      gameOver = false
      console.log(`You have ${triesLeft} tries left.`)      
      console.log("You have tried this number already")
      console.log(previousGuesses)
      
  } else if (guess === number) {
    gameOver = true
    console.log(`You have ${triesLeft} tries left.`)
    message = 'You win!'
    console.log(message)
    
  } else if (guess < number) {
    gameOver = false
    previousGuesses.push(guess)    
    console.log('Your previous guesses were: ')
    console.log(previousGuesses)
    console.log(`You have ${triesLeft} tries left.`) 
    message = 'Aim higher'
    console.log(message)
    
  } else {
    gameOver = false
    previousGuesses.push(guess)    
    console.log('Your previous guesses were: ')
    console.log(previousGuesses)
    console.log(`You have ${triesLeft} tries left.`)    
    message = 'Aim lower'
    console.log(message)
  }
  
  var updatedGame = Game(number, triesLeft, gameOver, message)
  return updatedGame
}


/**
 *  Called when a user presses <Enter>
 */
rl.on('line', function (input) {
  var guess = Number(input)
  
  game = updateGame(game, guess)
  
  if (game.gameOver){
//     render (game, '')
//     process.exit()
//   } else {
//     render(game, 'guess a number')
  }
});

/**
 * Logs the game message and a prompt
 * @function
 * @param  {Game} game   
 * @param  {String} prompt 
 */
function render(game, prompt){
  clear()
  console.log(game.message)
  console.log(prompt)
}

function pastGuesses() {
    //for (var i = 0; i < previousGuesses.length; i++) {
        return previousGuesses
}

/**
 * Called when the user starts the game. Sets up the game object.
 * @function startGame 
 *
 */
function startGame(){
  var gameNumber = getRandomNumber(1, 10)
  var tries = 10
  var gameOver = false
  var message = 'Guess The Number'
  game = Game(gameNumber, tries, gameOver, message)

  //render(game, 'guess a number')
}


var game
startGame()