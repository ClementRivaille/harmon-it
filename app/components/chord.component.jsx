import React from 'react'
import NoteComponent from './note.component.jsx'

/**
 * Properties:
 * chord (Chord) - Chord to display
 * flat (bool) -Wether to display flat note or sharp
 */
export default class ChordComponent extends React.Component {

  render() {
    const listNotes = this.props.chord.getNotes().map((note,index) =>
      <li key={index}>
        <NoteComponent note={note} flat={this.props.flat}/>
      </li>)
    return (
      <ul>
        {listNotes}
      </ul>
    )
  }
}

