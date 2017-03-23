import React from 'react'
import LinkedKeyboard from './components/containers/linked-keyboard.component'
import LinkedChord from './components/containers/linked-chord.component'

export default class HarmonItApp extends React.Component {

  constructor(props, context) {
    super(props, context)

    this.state = {}
    this.context.store.subscribe(() => {
      this.setState({
        baseSelected: this.context.store.getState().chord.base !== undefined
      })
    })
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

    return (
      <div style={style}>
        <div style={style.keyboard}>
          <LinkedKeyboard />
        </div>
        <div style={style.chord}>
          {this.state.baseSelected ? <LinkedChord/> : <div></div>}
        </div>
      </div>
    )
  }
}

HarmonItApp.contextTypes = {
  store: React.PropTypes.object.isRequired
}
