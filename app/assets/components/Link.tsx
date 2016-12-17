import * as React from 'react'
import { PropTypes,MouseEventHandler ,ReactNode} from 'react'

export interface LinkProps{
  active:boolean
  onClick: ()=>void
  children: ReactNode
  filter:string
}
export const Link = ({ active, children, onClick }:LinkProps) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

// Link.propTypes = {
//   active: PropTypes.bool.isRequired,
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func.isRequired
// }

//export default Link
