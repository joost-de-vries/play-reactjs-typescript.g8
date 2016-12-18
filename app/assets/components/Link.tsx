import * as React from 'react'
import { PropTypes,MouseEventHandler ,ReactNode} from 'react'
import HTMLProps = React.HTMLProps

function assert<A>(aOpt:A | undefined):A {
  return aOpt!
}

export interface LinkProps{
  active?:boolean
  filter:string
}

export const Link = ({ active, children, onClick }:LinkProps & HTMLProps<any>) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick!(e)
       }}
    >
      {children}
    </a>
  )
}
