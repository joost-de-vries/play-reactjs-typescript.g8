import * as React from "react"
import {connect, Dispatch} from "react-redux"
import {addTodo, AppAction} from "../actions/index"

interface AddTodoProps {
  dispatch?: Dispatch<AppAction>
}

let AddTodo = ({dispatch}:AddTodoProps) => {
  let input: HTMLInputElement

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch!(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }}/>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
