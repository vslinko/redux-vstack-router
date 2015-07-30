import {SCREEN_CHANGE} from './constants'

const initialState = {
  location: undefined,
  screen: undefined
}

export default function routerReducer(state = initialState, action) {
  if (action.type === SCREEN_CHANGE) {
    return {
      ...state,
      location: action.location,
      screen: action.screen
    }
  } else {
    return state
  }
}
