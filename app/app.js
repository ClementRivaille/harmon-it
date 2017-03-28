import React from 'react'
import { connect } from 'react-redux'
import LinkedKeyboard from './components/containers/linked-keyboard.component'
import LinkedChord from './components/containers/linked-chord.component'
import LinkedOptions from './components/containers/linked-options.component'

let HarmonitApp = (props) => {
  const style = {
    title: {
      margin: '0 0 0 1vw',
      color: 'white',
      fontFamily: 'sans'
    },
    options: {
      position: 'absolute',
      top: 0,
      right: 0
    },
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

  return (
    <div style={style}>
      <div style={style.keyboard}>
        <h1 style={style.title}>Harmon'it</h1>
        <div style={style.options}>
          <LinkedOptions />
        </div>
        <LinkedKeyboard />
      </div>
      <div style={style.chord}>
        {props.baseSelected ? <LinkedChord/> : <div></div>}
      </div>
    </div>
  )
}

HarmonitApp = connect((state) => {
  return {
    baseSelected: state.chord.base !== undefined
  }
}, {})(HarmonitApp)

export default HarmonitApp
