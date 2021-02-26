const dataReducer = function (state = [], action) {
  switch (action.type) {
    case 'POPULATE_DATA':
      return action.payload
    case 'UPDATE_DATA':
      const newState = state.concat([
        [state[state.length - 1][0] + 1, action.payload],
      ])
      newState.splice(1, 1)
      return newState
    default:
      return state
  }
}

export default dataReducer
