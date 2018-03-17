import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';

class App extends Component {
  constructor(props){
    super(props);
    console.log('Constructor');
  }

  state = {
    toggle: true
  }

  // Not used very often
  // Setting state here will NOT trigger the re-rendering
  // As it is called before render()
  componentWillMount(){
    console.log('WillMount');
  }

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    console.log('Render');
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

  componentDidMount(){
    console.log('DidMount')
  }
}

export default App;
