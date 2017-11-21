import React, { PropTypes } from 'react'
import Toggle from 'react-toggle'

/**
 * Properties:
 * flat (bool) - Wether to display flat note or sharp
 * switchSymbolDisplay (func) - switch between sharp and flat
 */
export default class ChordSettingsComponent extends React.Component {

  render() {
    const style = {
      padding: '10px',
      width: '25%',
      display: 'grid',
      gridTemplateColumns: '33%',
      gridAutoFlow: 'column',
      fontFamily: 'sans',
      color: 'white',
      toneCell: {
        display: 'grid',
        gridTemplateColumn: '50% 50%',

        switch: {
          button: {
            transform: 'rotate(90deg) translateX(25%)'
          },
          gridColumn: '1 / 2',
          gridRow: 1
        },
        values: {
          gridColumn: 2,
          grodRow: 1
        }
      }
    }
    return (
      <div style={style}>
        <div style={style.toneCell}>
          <div style={style.toneCell.switch}>
            <div style={style.toneCell.switch.button}>
              <Toggle
                checked={this.props.chord.minor}
                onChange={(e) => this.props.setTone(e.target.checked)}
                icons={false}
                className="neutral" />
              </div>
          </div>
          <label style={style.toneCell.values}>Major</label>
          <label style={style.toneCell.values}>Minor</label>
        </div>

        <div>
          <label>
            <input name="seventh" type="checkbox"
              checked={this.props.chord.seventh}
              onChange={(e) => this.props.addNotes(e.target.checked, this.props.chord.ninth)}/> Seventh
          </label>
          <br/>
          <label>
            <input name="ninth" type="checkbox"
              checked={this.props.chord.ninth}
              onChange={(e) => this.props.addNotes(this.props.chord.seventh, e.target.checked)}/> Ninth
          </label>
        </div>

        <div>
          <select name="mode" value={this.readMode()} onChange={(e) => this.setMode(e.target.value)}>
            <option value="">Perfect</option>
            <option value="diminished">{ this.props.chord.minor ? 'Diminished' : 'Dominant'}</option>
            <option value="augmented">Augmented</option>
          </select>
        </div>
      </div>
    )
  }

  readMode() {
    return this.props.chord.diminished ? 'diminished' : this.props.chord.augmented ? 'augmented' : ''
  }

  setMode(value) {
    this.props.setMode(value === 'diminished', value === 'augmented')
  }

}

ChordSettingsComponent.propTypes = {
  chord: PropTypes.object.isRequired,
  setTone: PropTypes.func.isRequired,
  addNotes: PropTypes.func.isRequired,
  setMode: PropTypes.func.isRequired
}
