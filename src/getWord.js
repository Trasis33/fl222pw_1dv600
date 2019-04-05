module.exports.getWord = () => {
  let words = ['awkward', 'bagpipe', 'banjo', 'dwarfes', 'fishhook', 'haphazard', 'hyphen', 'ivory', 'jiffy', 'jinx', 'jukebox', 'kiosk', 'kayak', 'numbskull', 'oxygen', 'pixel', 'polka', 'rhythmic', 'rogue', 'sphinx', 'swivel', 'unzip', 'yacht', 'zigzag', 'zombie']
  // let words = ['test']
  let randomWord = Math.floor(Math.random() * (words.length - 1))

  return words[randomWord]
}
