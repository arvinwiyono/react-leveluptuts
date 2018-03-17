import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';

class App extends Component {
  submit = () => {
    console.log(this.text.value);
    console.log(this.email.value);
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Welcome name="Arvin"/>
      </header>
      <p className="App-intro">
        To get started, edit
        <code>src/App.js</code>
        and save to reload.
      </p>
      <input type="text" placeholder="A text" ref={(inputText) => this.text = inputText}></input>
      <input type="email" placeholder="example@gmail.com" ref={(inputText) => this.email = inputText}></input>
      <button onClick={this.submit}>Show Value</button>
    </div>);
  }
}

export default App;
