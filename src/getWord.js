module.exports.getWord = (difficulty) => {
  if (difficulty === 'Hard') {
    let hard = ['awkward', 'bagpipe', 'banjo', 'dwarfes', 'fishhook', 'haphazard', 'hyphen', 'ivory', 'jiffy', 'jinx', 'jukebox', 'kiosk', 'kayak', 'numbskull', 'oxygen', 'pixel', 'polka', 'rhythmic', 'rogue', 'sphinx', 'swivel', 'unzip', 'yacht', 'zigzag', 'zombie']

    return randomWord(hard)
  } else {
    let easy = ['able', 'acid', 'after', 'again', 'ball', 'bell', 'because', 'between', 'bottle', 'camera', 'cheese', 'cotton', 'degree', 'down', 'effect', 'fall', 'feeling', 'gold', 'hammer', 'insect', 'jewel', 'linen', 'manager', 'number', 'peace', 'ready', 'scale', 'sister', 'test', 'verse']

    return randomWord(easy)
  }
}

let randomWord = (words) => {
  let randomWord = Math.floor(Math.random() * (words.length - 1))
  return words[randomWord]
}
