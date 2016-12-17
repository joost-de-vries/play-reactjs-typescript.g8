import {Action} from 'redux'


let nextTodoId = 0



export interface AddTodoAction extends Action{
   type: 'ADD_TODO'
  id: number
  text:string 
}

export const addTodo = (text:string) => (<AddTodoAction>{
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export interface SetVisibilityFilterAction extends Action{
  type: 'SET_VISIBILITY_FILTER'
  filter:string
}

export const setVisibilityFilter = (filter:string) => (<SetVisibilityFilterAction>{
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export interface ToggleTodoAction extends Action{
  type: 'TOGGLE_TODO',
  id:number 
}

export const toggleTodo = (id:number) => (<ToggleTodoAction>{
  type: 'TOGGLE_TODO',
  id
})

export type Actions = AddTodoAction | SetVisibilityFilterAction | ToggleTodoAction