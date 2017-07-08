import * as React from "react"
import {PropTypes, MouseEventHandler, HTMLAttributes, ClassAttributes} from "react"
import Todo from "./Todo"
import {TodoState} from "../reducers/todos"
import {ToggleTodoAction} from "../actions"

export interface TodoListProps {
  onTodoClick: (id: number) => ToggleTodoAction
  todos: TodoState[]
}

const TodoList = ({todos, onTodoClick}:TodoListProps) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

export default TodoList
