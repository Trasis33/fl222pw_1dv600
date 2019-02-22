let Letter = require('./letter')

class Word {
  constructor (word) {
    this.toBeGuessed = word
    this.toBeGuessedLetters = this.toBeGuessed.split('')
    this.letterObjArray = []
    this.listOfGuesses = []
    this.guessCheck = false
    this.isCorrectGuess = false
  }

  setUp () {
    for (let letter of this.toBeGuessedLetters) {
      let letterObj = new Letter(letter, false)
      this.letterObjArray.push(letterObj)
    }
  }

  combineLetters () {
    let word = []
    for (let letter of this.letterObjArray) {
      word.push(letter.showLetter())
    }
    return word.join(' ')
  }

  updateLetters () {
    for (let letter of this.letterObjArray) {
      letter = letter.showLetter()
    }
  }

  guessLetter (guess) {
    this.isCorrectGuess = false
    if (this.listOfGuesses.indexOf(guess) === -1) {
      this.listOfGuesses.push(guess)
      let checkAllGuesses = true
      for (let letter of this.letterObjArray) {
        if (guess === letter.value && letter.isGuessed === false) {
          letter.isGuessed = true
          this.isCorrectGuess = true
        }
        if (letter.isGuessed === false) {
          checkAllGuesses = false
        }
      }
      this.guessCheck = checkAllGuesses
    }
  }

  updateWord (word) {
    // console.log(this.listOfGuesses)
    // console.log(this.toBeGuessedLetters)
    this.guessLetter(word)
    this.updateLetters()
    return this.combineLetters()
  }
}

module.exports = Word
