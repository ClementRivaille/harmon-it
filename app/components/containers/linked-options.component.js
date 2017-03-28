import { connect } from 'react-redux'
import { switchSymbolDisplay } from '../../actions'
import OptionsComponent from '../options.component.jsx'

const mapStateToProps = (state) => {
  return {
    flat: state.options.flat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchSymbolDisplay: (flat) => {
      dispatch(switchSymbolDisplay(flat))
    }
  }
}

const LinkedOptions = connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsComponent)

export default LinkedOptions
