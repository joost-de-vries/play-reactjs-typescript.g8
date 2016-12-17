import * as React from 'react'
import FilterLink from '../containers/FilterLink'

// ts won't compile without setting these useless initial values or making them optional in the props types
// see http://stackoverflow.com/questions/39908666/property-is-missing-in-type-error
const dummyInitial=()=>{console.log("this shouldn't happen")}

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL" active={false} children={[]} onClick={dummyInitial}>
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE"  active={false} children={[]} onClick={dummyInitial}>
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED"  active={false} children={[]} onClick={dummyInitial}>
      Completed
    </FilterLink>
  </p>
)

export default Footer
