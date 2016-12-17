import {Actions} from '../actions'

const visibilityFilter = (state = 'SHOW_ALL', action:Actions) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
