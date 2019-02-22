class Letter {
  constructor (value, isGuessed) {
    this.value = value
    this.isGuessed = isGuessed
  }
  showLetter () {
    if (this.isGuessed) {
      return this.value
    }
    return '_'
  }
}

module.exports = Letter
