import React from 'react'
import ReactDOM from 'react-dom'
import Chord from '../lib/chord'
import KeyboardComponent from './components/keyboard.component.jsx'
import ChordComponent from './components/chord.component.jsx'

class HarmonItApp extends React.Component {

  constructor() {
    super()
    this.state = {
      flat: false
    }
  }

  render() {
    const style = {
      keyboard: {
        height: '50%',
        backgroundColor: '#96e6f8'
      },
      chord: {
        height: '50%',
        backgroundColor: '#5151a1'
      },
      width: '100%',
      height: '100%'
    }

    const resultDisplay = this.state.chord ? <ChordComponent chord={this.state.chord} flat={this.state.flat}/> : <div></div>
    return (
      <div style={style}>
        <div style={style.keyboard}>
          <KeyboardComponent selectNote={(note) => this.setChord(note)} flat={this.state.flat}/>
        </div>
        <div style={style.chord}>
          {resultDisplay}
        </div>
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
