import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail/MovieDetail';
import logo from './logo.svg';
import './App.css';

const Test = () => <div>Hello :)</div>;

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to = "/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route path="/:movie_id" component={MovieDetail} />
            <Route path="/test" render={Test} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
