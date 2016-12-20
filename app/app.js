import React from 'react'
import ReactDOM from 'react-dom'
import Chord from '../lib/chord'
import Note from '../lib/note'

class HarmonItApp extends React.Component {

  render() {
    let noteC = new Note(3)
    let cMinor = new Chord(noteC, true)
    const listNotes = cMinor.getNotes().map(note => <li>{note.symbol}</li>)
    return (
      <ul>{listNotes}</ul>
    )
  }
}

// Render to ID content in the DOM
ReactDOM.render(< HarmonItApp / >,
    document.getElementById('container')
)
