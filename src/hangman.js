let word = require('./word')
let wordLetters = require('./letter')

// let words
// let letters = this.word.split('')
let guessedLetters = []
let currentLettersArr = []
// let guesses = guesses
// let noMoreGuesses = false
// let correctGuess = false

let startGame = () => {
  let currentWord = word.getWord()
  // console.log(currentWord)
  let letters = currentWord.split('')

  letters.forEach(letter => {
    // console.log(letter)
    let currentLetters = wordLetters.showLetter(letter, false)
    currentLettersArr.push(currentLetters)
  })
  console.log(currentLettersArr)
}

module.exports.startGame = startGame
