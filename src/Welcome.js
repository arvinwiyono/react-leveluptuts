import React, {Component} from 'react';

export default class Welcome extends Component {
  render() {
    const welcome = "Welcome to React";
    const {name, toggle} = this.props;
    return (<h1 className="App-title" onClick={toggle}>{
        welcome + (
          name
          ? `, ${name}!`
          : null)
      }</h1>);
  }
}
