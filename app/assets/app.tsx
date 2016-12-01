import * as React from "react"

interface AppProps {name:string}
interface AppState {toggle:boolean}

export class App extends React.Component<AppProps, AppState>{
  constructor(props:AppProps){
    super(props)
    this.state={toggle:false}
  }
  render(){
    return <h1 onClick={this.handleClick}>Hello from {this.props.name} toggle: {this.state.toggle ? 'ON' : 'OFF'}</h1>
  }
  componentWillMount(){

  }
  componentDidMount(){

  }
  handleClick = ()=> {
    console.log("clicked")
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }
}
