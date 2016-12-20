const SYMBOLS = ['A', 'A♯', 'B', 'C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯']
const SYMBOLS_FLAT = ['A', 'B♭', 'B', 'C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭']

export default class Note {
  constructor(key: Number) {
    this.key = key
    this.symbol = SYMBOLS[key % SYMBOLS.length]
    this.symbolFlat = SYMBOLS_FLAT[key % SYMBOLS_FLAT.length]
    this.octave = Math.floor(key / SYMBOLS.length)
  }
}
