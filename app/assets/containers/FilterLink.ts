import {connect, Dispatch} from "react-redux"
import {setVisibilityFilter, AppAction} from "../actions/index"
import {Link, LinkProps} from "../components/Link"
import {AppState} from "../reducers/index"


const mapStateToProps = (state: AppState, ownProps: LinkProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch<AppAction>, ownProps: LinkProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

