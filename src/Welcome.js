import React, {Component} from 'react';

export default class Welcome extends Component {
  render() {
    const welcome = "Welcome to React";
    const {name} = this.props;
    return (<h1 className="App-title">{
        welcome + (
          name
          ? `, ${name}!`
          : null)
      }</h1>);
  }
}
