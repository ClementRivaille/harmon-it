import { connect } from 'react-redux'
import { selectChord } from '../../actions'
import KeyboardComponent from '../keyboard.component.jsx'

const mapStateToProps = (state) => {
  return {
    flat: state.options.flat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectNote: (note) => {
      dispatch(selectChord(note))
    }
  }
}

const LinkedKeyboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyboardComponent)

export default LinkedKeyboard
