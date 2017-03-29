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
      display: 'grid',
      gridTemplateColumns: '25%',
      gridAutoFlow: 'column',
      cell: {
        gridColumn: 1
      }
    }
    return (
      <div style={style}>
        <div>
          <label>
            <span>Major</span>
            <Toggle
              checked={this.props.chord.minor}
              onChange={(e) => this.props.setTone(e.target.checked)}
              icons={false}
              className="neutral" />
            <span>Minor</span>
          </label>
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
          <label>
            <input name="dominant" type="checkbox"
            checked={this.props.chord.dominant}
            onChange={(e) => this.props.setDominant(e.target.checked)}/> Dominant
          </label>
        </div>

        <div>
          <select name="mode" value={this.readMode()} onChange={(e) => this.setMode(e.target.value)}>
            <option value="">Mode</option>
            <option value="diminished">Diminished</option>
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
  setMode: PropTypes.func.isRequired,
  setDominant: PropTypes.func.isRequired
}
