import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface AppProps {name:string}

export default class App extends React.Component<AppProps, {}>{
  render(){
    return <h1>Hello from {this.props.name} </h1>
  }
}
