import Note from './note'

const INTERVALS = {
  major: {
    third: 4,
    fifth: 7,
    seventh: 11,
    ninth: 14
  },
  minor: {
    third: 3,
    fifth: 7,
    seventh: 10,
    ninth: 14
  }
}

export default class Chord {
  constructor(base: Note, minor: bool = false, seventh: bool = false, ninth: bool = false, diminished: bool = false, augmented: bool = false) {
    this.base = base
    this.minor = minor
    this.seventh = seventh
    this.ninth = ninth
    this.diminished = diminished
    this.augmented = augmented
  }

  getNotes(): Array<Note> {
    let notes: Array<Note> = [this.base]

    let intervals = this.minor ? INTERVALS.minor : INTERVALS.major

    let third: Note = new Note(this.base.key + intervals.third)
    let fifth: Note = new Note(this.base.key + intervals.fifth + (this.diminished && this.minor ? -1 : this.augmented ? 1 : 0))
    let seventh: Note = new Note(this.base.key + intervals.seventh + (this.diminished ? -1 : 0))
    let ninth: Note = new Note(this.base.key + intervals.ninth)

    notes.push(third)
    notes.push(fifth)
    if (this.seventh) {
      notes.push(seventh)
    }
    if (this.ninth) {
      notes.push(ninth)
    }

    return notes
  }
}
