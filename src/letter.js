
module.exports.showLetter = (letter, isGuessed) => {
  if (isGuessed) {
    return letter
  }
  return '_'
}
