import React from 'react'
import { connect } from 'react-redux'
import LinkedKeyboard from './components/containers/linked-keyboard.component'
import LinkedChord from './components/containers/linked-chord.component'

let HarmonitApp = (props) => {
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

  return (
    <div style={style}>
      <div style={style.keyboard}>
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
