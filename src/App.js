import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Dva from './heroes/dva';
import Tracer from './heroes/tracer';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);


const Heroes  = ({ match }) => (
  <div className="c-heroes">
    <div className="c-heroesList__col">
      <ul className="c-heroesList">
        <li>
          <Link to={`${match.url}/tracer`}>Tracer</Link>
        </li>
        <li>
          <Link to={`${match.url}/dva`}>Dva</Link>
        </li>
        <li>
          <Link to={`${match.url}/doomfist`}>Doomfist</Link>
        </li>
        <li>
          <Link to={`${match.url}/genji`}>Genji</Link>
        </li>
        <li>
          <Link to={`${match.url}/mcree`}>Mcree</Link>
        </li>
        <li>
          <Link to={`${match.url}/pharah`}>Pharah</Link>
        </li>
        <li>
          <Link to={`${match.url}/reaper`}>Reaper</Link>
        </li>
        <li>
          <Link to={`${match.url}/soldier`}>Soldier: 76</Link>
        </li>
        <li>
          <Link to={`${match.url}/tracer`}>Sombra</Link>
        </li>
        <li>
          <Link to={`${match.url}/tracer`}>Tracer</Link>
        </li>
        <li>
          <Link to={`${match.url}/tracer`}>Bastion</Link>
        </li>
        <li>
          <Link to={`${match.url}/tracer`}>Hnazo</Link>
        </li>
        <li>
          <Link to={`${match.url}/tracer`}>Junkrat</Link>
        </li>
        <li>
          <Link to={`${match.url}/tracer`}>MEI</Link>
        </li>
      </ul>
    </div>

    <div className="c-heroesList__col">
      {/*<Route path={`${match.url}/:heroId`} component={Hero} />      */}

      <Route path={`${match.url}/tracer`} component={Tracer} />
      <Route path={`${match.url}/dva`} component={Dva} />

      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  </div>
)

const Hero = ({ match }) => (
  <div>
    <h3>{match.params.heroId}</h3>

    <Route path={`${match.url}/tracer`} component={Tracer} />
    <Route path={`${match.url}/dva`} component={Dva} />

  </div>
);



class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>
          <ul className="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/heroes">Heroes</Link>
            </li>
          </ul>

          <div className="l-page">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/heroes" component={Heroes} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
