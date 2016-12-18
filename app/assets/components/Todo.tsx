import * as React from "react"
import {PropTypes} from "react"

interface TodoProps {
  onClick: (e: any) => void
  completed: boolean
  text: string
}

const Todo = ({onClick, completed, text}:TodoProps) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo
