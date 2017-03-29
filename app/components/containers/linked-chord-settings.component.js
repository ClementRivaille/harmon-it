import { connect } from 'react-redux'
import { setTone, addNotes, setMode, setDominant } from '../../actions'
import ChordSettingsComponent from '../chord-settings.component.jsx'

const mapStateToProps = (state) => {
  return {
    chord: state.chord
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTone: (minor) => {
      dispatch(setTone(minor))
    },
    addNotes: (seventh, ninth) => {
      dispatch(addNotes(seventh, ninth))
    },
    setMode: (diminished, augmented) => {
      dispatch(setMode(diminished, augmented))
    },
    setDominant: (dominant) => {
      dispatch(setDominant(dominant))
    }
  }
}

const LinkedChordSettings = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChordSettingsComponent)

export default LinkedChordSettings
