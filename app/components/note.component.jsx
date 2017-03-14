import React from 'react'

/**
 * Properties:
 * note (Note) - Note to display
 * flat (bool) -Wether to display flat note or sharp
 * onClick (function) - Callback when clicked (optional)
 */
export default class NoteComponent extends React.Component {

  render() {
    const style = {
      display: 'inline-block',
      backgroundColor: 'white',
      fontSize: this.props.keyboard ? '2vw' : '4vw',
      width: this.props.keyboard ? '5vw' : '10vw',
      height: '10vw',
      margin: 10,
      border: 'none'
    }

    const callback = this.props.onClick || (() => {})
    return (
      <button style={style} onClick={() => callback()}>
        {this.props.flat ? this.props.note.symbolFlat : this.props.note.symbol}
      </button>
    )
  }
}

