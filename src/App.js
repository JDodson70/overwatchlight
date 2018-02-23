import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';





//TANK
import Dva from './heroes/tank/dva';
import Reinhardt from './heroes/tank/reinhardt';
import Orsa from './heroes/tank/orsa';
import Roadhog from './heroes/tank/roadhog';
import Winston from './heroes/tank/winston';
import Zarya from './heroes/tank/zarya';

//SUPPORT
import Ana from   './heroes/support/ana';
import Lúcio from './heroes/support/lúcio';
import Mercy from './heroes/support/mercy';
import Moira from './heroes/support/moira';
import Symmetra from './heroes/support/symmetra';
import Zenyatta  from './heroes/support/zenyatta';






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
        <Link to={`${match.url}/orsa`}>Orsa</Link>
      </li>
      <li>
        <Link to={`${match.url}/roadhog`}>Roadhog</Link>
    </li>
    <li>
        <Link to={`${match.url}/reinhardt`}>Reinhardt</Link>
    </li>
      <li>
        <Link to={`${match.url}/winston`}>Winston</Link>
      </li>
      <li>
        <Link to={`${match.url}/zarya`}>Zarya</Link>
      </li>
    <li>
      <Link to={`${match.url}/ana`}>Ana</Link>
    </li>
      <li>
          <Link to={`${match.url}/lúcio`}>Lúcio</Link>
        </li>
        <li>
          <Link to={`${match.url}/mercy`}>Mercy</Link>
        </li>
        <li>
          <Link to={`${match.url}/moira`}>Moira</Link>
        </li>
      <li>
        <Link to={`${match.url}/symmetra`}>Symmetra</Link>
    </li>
    <li>
      <Link to={`${match.url}/zenyatta`}>Zenyatta</Link>
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


      <Route path={`${match.url}/dva`} component={Dva} />
      <Route path={`${match.url}/reinhardt`} component={Reinhardt}/>
      <Route path={`${match.url}/orsa`} component={Orsa}/>
      <Route path={`${match.url}/winston`} component={Winston}/>
      <Route path={`${match.url}/zarya`} component={Zarya}/>
      <Route path={`${match.url}/ana`} component={Ana}/>
      <Route path={`${match.url}/mercy`} component={Mercy}/>
      <Route path={`${match.url}/moira`} component={Moira}/>
      <Route path={`${match.url}/symmetra`} component={Symmetra}/>
      <Route path={`${match.url}/zenyatta`} component={Zenyatta}/>

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


    <Route path={`${match.url}/dva`} component={Dva} />
    <Route path={`${match.url}/reinhardt`} component={Reinhardt}/>
    <Route path={`${match.url}/orsa`} component={Orsa}/>
    <Route path={`${match.url}/winston`} component={Winston}/>
    <Route path={`${match.url}/zarya`} component={Zarya}/>
    <Route path={`${match.url}/ana`} component={Ana}/>
    <Route path={`${match.url}/mercy`} component={Mercy}/>
    <Route path={`${match.url}/moira`} component={Moira}/>
    <Route path={`${match.url}/symmetra`} component={Symmetra}/>
    <Route path={`${match.url}/zenyatta`} component={Zenyatta}/>

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
