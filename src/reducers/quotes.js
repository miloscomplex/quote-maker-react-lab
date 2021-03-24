//import uuid from 'uuid'

export default quoteReducer

function quoteReducer(state = [], action) {
  let idx

  switch (action.type) {
    case "ADD_QUOTE":
        return [...state, action.quote]

    case "REMOVE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId)
      //debugger
      console.log('remove quote is called' + idx)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]

    case "UPVOTE_QUOTE":
      idx = state.findIndex(s => s.id === action.quoteId)
      state[idx].votes = state[idx].votes + 1
      return [ ...state,  ...state[idx]]

    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId)
      if (state[idx].votes >= 1) {
        state[idx].votes = state[idx].votes - 1
      }
      return [ ...state, ...state[idx]]

    default:
      return state;
  }
}
