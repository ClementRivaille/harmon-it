// Chord

export const selectChord = (note) => {
  return {
    type: 'SELECT_CHORD',
    note
  }
}

export const setTone = (minor) => {
  return {
    type: 'SET_TONE',
    minor
  }
}

export const addNotes = (seventh, ninth) => {
  return {
    type: 'ADD_NOTES',
    seventh,
    ninth
  }
}

export const setMode = (diminished, augmented) => {
  return {
    type: 'SET_MODE',
    diminished,
    augmented
  }
}

export const setDominant = (dominant) => {
  return {
    type: 'SET_DOMINANT',
    dominant
  }
}

// Options
export const switchSymbolDisplay = (flat) => {
  return {
    type: 'SWITCH_SYMBOL_DISPLAY',
    flat
  }
}
