const options = (state = { flat: false }, action) => {
  switch (action.type) {
    case 'SWITCH_SYMBOL_DISPLAY':
      return Object.assign({}, state, {flat: action.flat})
    default:
      return state
  }
}

export default options
