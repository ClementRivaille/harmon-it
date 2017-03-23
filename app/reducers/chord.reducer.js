const chord = (state = {
  minor: false,
  seventh: false,
  ninth: false,
  diminished: false,
  augmented: false,
  dominant: false
}, action) => {
  switch (action.type) {
    case 'SELECT_CHORD':
      return Object.assign({}, state, {base: action.note.key})
    case 'SET_TONE':
      return Object.assign({}, state, {minor: action.minor})
    case 'ADD_NOTES':
      return Object.assign({}, state, {seventh: action.seventh, ninth: action.ninth})
    case 'SET_MODE':
      return Object.assign({}, state, {diminished: action.diminished, augmented: action.augmented})
    case 'SET_DOMINANT':
      return Object.assign({}, state, {dominant: action.dominant})
    default:
      return state
  }
}

export default chord
