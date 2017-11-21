import React from 'react'
import { connect } from 'react-redux'
import LinkedKeyboard from './components/containers/linked-keyboard.component'
import LinkedChord from './components/containers/linked-chord.component'
import LinkedOptions from './components/containers/linked-options.component'
import LinkedChordSettings from './components/containers/linked-chord-settings.component'

let HarmonitApp = (props) => {
  const style = {
    title: {
      margin: '0 0 0 1vw',
      color: 'white',
      fontFamily: 'sans'
    },
    options: {
      float: 'right'
    },
    header: {
      position: 'absolute',
      width: '100%',
      top: 0
    },
    keyboard: {
      height: '50%',
      backgroundColor: '#96e6f8',
      overflowY: 'auto'
    },
    chord: {
      height: '50%',
      backgroundColor: '#5151a1',
      overflowY: 'auto'
    },
    width: '100%',
    height: '100%'
  }

  return (
    <div style={style}>
      <header style={style.header}>
        <h1 style={style.title}>Harmon'it</h1>
        <div style={style.options}>
          <LinkedOptions />
        </div>
      </header>
      <div style={style.keyboard}>
        <LinkedKeyboard />
      </div>
      <div style={style.chord}>
        {props.baseSelected ? <LinkedChord/> : <div></div>}
        <LinkedChordSettings/>
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
