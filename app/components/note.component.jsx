import React from 'react'

/**
 * Properties:
 * note (Note) - Note to display
 * flat (bool) -Wether to display flat note or sharp
 * onClick (function) - Callback when clicked (optional)
 */
export default class NoteComponent extends React.Component {

  render() {
    const callback = this.props.onClick || (() => {})
    return (
      <button onClick={() => callback()}>
        {this.props.flat ? this.props.note.symbolFlat : this.props.note.symbol}
      </button>
    )
  }
}

