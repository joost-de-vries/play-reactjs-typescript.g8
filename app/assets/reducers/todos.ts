import {AppAction, AddTodoAction, ToggleTodoAction} from "../actions"
import {Reducer} from "redux"

export interface TodoState {
  id: number
  text: string
  completed: boolean
}

const create = (action: AddTodoAction) => ({
  id: action.id,
  text: action.text,
  completed: false
})

const toggle = (state: TodoState, action: ToggleTodoAction) => {
  if (state.id !== action.id) {
    return state
  }

  return {
    ...state,
    completed: !state.completed
  }
}

export function todos(state: TodoState[] = [], action: AddTodoAction | ToggleTodoAction): TodoState[] {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        create(action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        toggle(t, action)
      )
    default:
      return state
  }
}

export default todos as Reducer<TodoState[]>
