import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';

class App extends Component {

  state = {
    toggle: true
  }

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Welcome name="Arvin" toggle={this.handleToggle}/>
      </header>
      <p className="App-intro">
        To get started, edit
        <code>src/App.js</code>
        and save to reload.
      </p>
      {/* This is how we do inline conditional in react */}
      {this.state.toggle && <p>This should show and hide</p>}
      <button onClick={this.handleToggle}>Show / Hide</button>
    </div>);
  }
}

export default App;
