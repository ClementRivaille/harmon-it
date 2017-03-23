import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import harmonitAppReducers from './reducers'
import HarmonitApp from './app'

let store = createStore(harmonitAppReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <HarmonitApp/>
  </Provider>,
  document.getElementById('container'))
