import {connect, Dispatch} from "react-redux"
import {setVisibilityFilter, AppAction} from "../actions/index"
import {Link, LinkProps} from "../components/Link"
import {AppState} from "../reducers/index"

// we make the attributes of mapStateToProps and mapDispatchToProps optional
// using the Partial mapped type
// to prevent this compilation error
// see http://stackoverflow.com/questions/39908666/property-is-missing-in-type-error
function partialize<A>(a: A): Partial<A> {
  return a
}

const mapStateToProps = (state: AppState, ownProps: LinkProps) => partialize({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch<AppAction>, ownProps: LinkProps) => partialize({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

