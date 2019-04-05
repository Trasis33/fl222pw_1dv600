let getWord = require('./getWord')
let Word = require('./word')
let inquirer = require('inquirer')

let startObj = {
  type: 'list',
  name: 'start',
  message: 'Want to play a game?',
  choices: ['Yes', 'No']
}

let questionObj = {
  type: 'input',
  name: 'letter',
  message: 'guess a letter',
  validate: (name) => {
    return name.length === 1
  }
}

// let exitObj = {
//   type: 'list',
//   name: 'exit',
//   message: 'Sure you want to exit?',
//   choices: ['Yes', 'No']
// }

let word
let wordToGuess
let remainingGuesses
let numberOfGuesses
let current = ''

let startGame = () => {
  word = undefined
  wordToGuess = undefined
  remainingGuesses = 9
  numberOfGuesses = 0
  current = ''
  word = getWord.getWord()
  wordToGuess = new Word(word)
  wordToGuess.setUp()
  mainMenu()
}

let userInput = () => {
  inquirer.prompt(questionObj).then(answers => {
    // if (answers.letter === 'Q') {
    //   exitGame()
    // }
    compare(answers.letter)
  })
}

let compare = (guess) => {
  current = wordToGuess.updateWord(guess)

  if (wordToGuess.isCorrectGuess === false && numberOfGuesses !== wordToGuess.listOfGuesses.length) {
    --remainingGuesses
  }
  numberOfGuesses = wordToGuess.listOfGuesses.length
  console.log(current)
  console.log(`remaining guesses: ${remainingGuesses}`)

  if (wordToGuess.guessCheck === true) {
    console.log('you win!')
    startGame()
    return
  }
  if (remainingGuesses > 0) {
    userInput()
  } else {
    console.log(`Your luck ran out! correct answer was '${word}'. Try again`)
    startGame()
  }
}

let mainMenu = () => {
  inquirer.prompt(startObj).then(answers => {
    if (answers.start === 'Yes') {
      userInput()
    } else {
      console.log('Thank you, come again')
    }
  })
}

// let exitGame = () => {
//   process.exit(0)
// inquirer.prompt(exitObj).then(answers => {
//   if (answers.exit === 'Yes') {
//     console.log('Thank you, come again')
//     process.exit(0)
//   }
// })
// }

let graphics = () => {
  let graphics
  return graphics
}

module.exports.startGame = startGame
module.exports.userInput = userInput
// module.exports.exitGame = exitGame
module.exports.graphics = graphics
