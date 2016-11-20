import * as React from "react"

interface AppProps {name:string}

export class App extends React.Component<AppProps, {}>{
  render(){
    return <h1>Hello from {this.props.name} </h1>
  }
  componentWillMount(){

  }
  componentDidMount(){

  }
}
