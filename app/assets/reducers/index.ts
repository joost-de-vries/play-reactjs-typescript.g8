import {combineReducers} from "redux"
import todos from "./todos"
import visibilityFilter from "./visibilityFilter"
import {TodoState} from "../reducers/todos"
import {AppAction} from "../actions/index"
import {Filter} from "../containers/VisibleTodoList";

export interface AppState {
  todos: TodoState[]
  visibilityFilter: Filter
}

// type AppReducer = (state: AppState, action: AppAction) => AppState

export const reducer = combineReducers({
  todos,
  visibilityFilter
})
