import React, { PropTypes } from 'react'
import NoteComponent from './note.component.jsx'
import { listNotes } from '../../lib/keyboard'

/**
 * Properties:
 * flat (bool) -Wether to display flat note or sharp
 * selectNote (function) - Callback when a note is clicked
 */
export default class KeyboardComponent extends React.Component {

  constructor() {
    super()
    this.state = {
      notes: listNotes()
    }
  }

  render() {
    const style = {
      li: {
        display: 'inline',
        listStyleType: 'none'
      },
      display: 'flex',
      justifyContent: 'center'
    }

    const keyboardSet = this.state.notes.map(note =>
      <li style={style.li} key={note.key}>
        <NoteComponent keyboard={true} note={note} onClick={() => this.props.selectNote(note)} flat={this.props.flat}/>
      </li>)

    return (
        <div style={style}>
          <ul>
            {keyboardSet}
          </ul>
        </div>
    )
  }

}

KeyboardComponent.propTypes = {
  selectNote: PropTypes.func.isRequired,
  flat: PropTypes.bool
}
