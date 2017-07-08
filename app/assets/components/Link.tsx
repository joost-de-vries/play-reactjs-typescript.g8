import * as React from "react"
import {PropTypes, MouseEventHandler, ReactNode, ClassAttributes, HTMLAttributes} from "react"
import {Filter} from "../containers/VisibleTodoList";

function assert<A>(aOpt: A | undefined): A {
  return aOpt!
}

export interface LinkProps {
  active?: boolean
  filter: Filter
}

export const Link = ({active, children, onClick}:LinkProps & HTMLAttributes<HTMLAnchorElement>) => {
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
