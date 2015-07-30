import {SCREEN_CHANGE} from './constants'

export default function createRouterListener(store) {
  return ([location, screen]) =>
    store.dispatch({
      type: SCREEN_CHANGE,
      location,
      screen
    })
}
