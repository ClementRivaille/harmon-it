import React, { PropTypes } from 'react'
import Toggle from 'react-toggle'

/**
 * Properties:
 * flat (bool) - Wether to display flat note or sharp
 * switchSymbolDisplay (func) - switch between sharp and flat
 */
export default class OptionsComponent extends React.Component {

  render() {
    const style = {
      flatLabel: {
        paddingRight: '1vw'
      },
      padding: '5px',
      fontFamily: 'sans',
      fontSize: '0.8em'
    }
    return (
      <div style={style}>
        <label>
          <span style={style.flatLabel}>{ this.props.flat ? 'Flat' : 'Sharp' }</span>
          <Toggle
            checked={this.props.flat}
            onChange={(e) => this.props.switchSymbolDisplay(e.target.checked)}
            icons={false}
            className="neutral" />
        </label>
      </div>
    )
  }

}

OptionsComponent.propTypes = {
  flat: PropTypes.bool.isRequired,
  switchSymbolDisplay: PropTypes.func.isRequired
}
