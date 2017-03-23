import { combineReducers } from 'redux'
import chord from './chord.reducer'
import options from './options.reducer'

const harmonitAppReducers = combineReducers({
  chord,
  options
})

export default harmonitAppReducers
