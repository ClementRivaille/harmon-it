import { connect } from 'react-redux'
import ChordComponent from '../chord.component.jsx'
import Chord from '../../../lib/chord'
import Note from '../../../lib/note'

const mapStateToProps = (state) => {
  return {
    chord: new Chord(new Note(state.chord.base),
      state.chord.minor,
      state.chord.seventh,
      state.chord.ninth,
      state.chord.diminished,
      state.chord.augmented,
      state.chord.dominant),
    flat: state.options.flat
  }
}

const LinkedChord = connect(
  mapStateToProps,
  {}
)(ChordComponent)

export default LinkedChord
