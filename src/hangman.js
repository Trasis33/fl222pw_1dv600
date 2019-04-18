let getWord = require('./getWord')
let Word = require('./word')
let inquirer = require('inquirer')

let startObj = {
  type: 'list',
  name: 'start',
  message: 'Want to play a game?',
  choices: ['Yes', 'No']
}

let difficultyObj = {
  type: 'list',
  name: 'difficulty',
  message: 'Choose a difficulty:',
  choices: ['Easy', 'Hard']
}

let questionObj = {
  type: 'input',
  name: 'letter',
  message: 'guess a letter',
  validate: (name) => {
    return name.length === 1
  }
}

let exitObj = {
  type: 'list',
  name: 'exit',
  message: 'Sure you want to exit?',
  choices: ['Yes', 'No']
}

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
  mainMenu()
}

let userInput = () => {
  inquirer.prompt(questionObj).then(answers => {
    compare(answers.letter)
  })
}

let compare = (guess) => {
  if (guess === 'Q') {
    exitGame()
    return
  }
  current = wordToGuess.updateWord(guess)

  if (wordToGuess.isCorrectGuess === false && numberOfGuesses !== wordToGuess.listOfGuesses.length) {
    --remainingGuesses
  }
  numberOfGuesses = wordToGuess.listOfGuesses.length
  console.log(current)
  graphics(remainingGuesses)
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
      chooseDifficulty()
    } else {
      console.log('Thank you, come again')
    }
  })
}

let chooseDifficulty = () => {
  inquirer.prompt(difficultyObj).then(answers => {
    if (answers.difficulty === 'Hard') {
      word = getWord.getWord('Hard')
      wordToGuess = new Word(word)
      wordToGuess.setUp()
      userInput()
    } else {
      word = getWord.getWord('Easy')
      wordToGuess = new Word(word)
      wordToGuess.setUp()
      userInput()
    }
  })
}

let exitGame = () => {
  inquirer.prompt(exitObj).then(answers => {
    if (answers.exit === 'Yes') {
      console.log('Thank you, come again')
      process.exit(0)
    } else {
      userInput()
    }
  })
}

let graphics = (guess) => {
  const hangmanLevel = [
    `
    |+---------+
    |     |
    |     O
    |    \\|/
    |    / \\
    |
    |_____________
    `,
    `
    |+---------+
    |      |
    |      O
    |     \\|/
    |       \\
    |
    |_____________
    `,
    `
    |+---------+
    |      |
    |      O
    |     \\|/
    |
    |
    |_____________
    `,
    `
    |+---------+
    |      |
    |      O
    |      |/
    |
    |
    |_____________
    `,
    `
    |+---------+
    |      |
    |      O
    |      |
    |
    |
    |_____________
    `,
    `
    |+---------+
    |      |
    |      O
    |
    |
    |
    |_____________
    `,
    `
    |+---------+
    |      |
    |
    |
    |
    |
    |_____________
    `,
    `
    |+---------+
    |
    |
    |
    |
    |
    |_____________
    `,
    `
    |
    |
    |
    |
    |
    |
    |_____________
    `,
    `
  
  
  
  
  
  
    _____________
      `
  ]
  console.log(hangmanLevel[guess])
}

module.exports.startGame = startGame
module.exports.userInput = userInput
module.exports.graphics = graphics
