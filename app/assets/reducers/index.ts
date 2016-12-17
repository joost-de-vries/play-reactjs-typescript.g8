import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import {TodoState} from '../reducers/todos'
import {Actions} from '../actions/index'

export interface AppState{
  todos: TodoState[]
  visibilityFilter:string
}

type AppReducer = (state:AppState, action:Actions)=> AppState

export const reducer = <AppReducer>combineReducers({
  todos,
  visibilityFilter
})
