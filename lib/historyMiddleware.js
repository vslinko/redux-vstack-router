import {PUSH_STATE, REPLACE_STATE, TRANSITION_TO} from './constants'

export default function historyMiddleware(history) {
  return store => next => action => {
    switch (action.type) {
      case PUSH_STATE:
        history.pushState(action.state, action.url)
        break

      case REPLACE_STATE:
        history.replaceState(action.state, action.url)
        break

      case TRANSITION_TO:
        history.transitionTo(action.location)
        break

      default:
        return next(action)
    }
  }
}
