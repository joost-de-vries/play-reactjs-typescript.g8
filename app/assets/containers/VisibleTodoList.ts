import { connect } from 'react-redux'
import { toggleTodo } from '../actions/index'
import TodoList from '../components/TodoList'
import {TodoState} from '../reducers/todos'
import {AppState} from '../reducers/index'

const getVisibleTodos = (todos:TodoState[], filter:string) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state:AppState) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps =  ({
  onTodoClick: toggleTodo
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
