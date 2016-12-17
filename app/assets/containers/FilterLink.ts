import { connect, Dispatch } from 'react-redux'
import { setVisibilityFilter , Actions} from '../actions/index'
import {Link,LinkProps} from '../components/Link'
import {AppState} from '../reducers/index'

const mapStateToProps = (state:AppState, ownProps:LinkProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>, ownProps:LinkProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
