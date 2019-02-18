let word = require('./word')

// let words
// let letters = this.word.split('')
// let guessedLetters = []
// let guesses = guesses
// let noMoreGuesses = false
// let correctGuess = false

let startGame = () => {
  console.log(word.getWord())
}

module.exports.startGame = startGame
