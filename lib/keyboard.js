import Note from './note'

export function listNotes() {
  return [...Array(12).keys()].map(code => new Note(code))
}
