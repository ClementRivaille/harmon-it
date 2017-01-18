import React from 'react'
import ReactDOM from 'react-dom'
import Chord from '../lib/chord'
import { listNotes } from '../lib/keyboard'
import ChordComponent from './components/chord.component.jsx'
import NoteComponent from './components/note.component.jsx'

class HarmonItApp extends React.Component {

  constructor() {
    super()
    this.state = {
      notes: listNotes(),
      flat: false
    }
  }

  render() {
    const keyboardSet = this.state.notes.map(note =>
      <li key={note.key}>
        <NoteComponent note={note} onClick={() => this.setChord(note)} flat={this.state.flat}/>
      </li>)
    const resultDisplay = this.state.chord ? <ChordComponent chord={this.state.chord} flat={this.state.flat}/> : <div></div>
    return (
      <div>
        <ul>
          {keyboardSet}
        </ul>
        {resultDisplay}
      </div>
    )
  }

  setChord(note) {
    const chord = new Chord(note)
    this.setState({chord: chord})
  }
}

// Render to ID content in the DOM
ReactDOM.render(< HarmonItApp / >,
    document.getElementById('container')
)
