import {PUSH_STATE, REPLACE_STATE, TRANSITION_TO} from './constants'

export function pushState(state, url) {
  return {
    type: PUSH_STATE,
    state,
    url
  }
}

export function replaceState(state, url) {
  return {
    type: REPLACE_STATE,
    state,
    url
  }
}

export function transitionTo(location) {
  return {
    type: TRANSITION_TO,
    location
  }
}
