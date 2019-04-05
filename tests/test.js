const sut = require('../src/hangman')
const getWord = require('../src/getWord')
const Word = require('../src/word')
const Letter = require('../src/letter')
const assert = require('chai').assert
const expect = require('chai').expect

describe('getWord', () => {
  it('should return a string', () => {
    expect(getWord.getWord()).to.be.a('string')
  })

  it('Should be a random word from an array', () => {
    let word1 = getWord.getWord()
    let word2 = getWord.getWord()

    assert.notDeepEqual(word1, word2)
  })
})

describe('word', () => {
  it('should return underscores if no letters has been guessed', () => {
    let word = new Word('test')
    word.setUp()

    expect(word.updateWord()).to.contain('_ _ _ _')
  })

  it('should be a word object', () => {
    let word = new Word('test')

    word.setUp()
    word.updateLetters()

    let firstLetter = word.letterObjArray[0].value

    expect(firstLetter).to.contain('t')

    let letter = new Letter(word, false)
    letter.showLetter()

    expect(word).to.be.an('object')
  })
})

describe('graphics', () => {
  it('should print a string', () => {
    expect(sut.graphics()).to.be.a('string')
  })
})
