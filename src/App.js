import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Tank
//import Dva from './heroes/tank/dva';

// Offense
import Doomfist from './heroes/offense/doomfist';
import Genji from './heroes/offense/genji';
import McCree from './heroes/offense/mccree';
import Pharah from './heroes/offense/pharah';
import Reaper from './heroes/offense/reaper';
import Soldier from './heroes/offense/soldier';
import Sombra from './heroes/offense/sombra';
import Tracer from './heroes/offense/tracer';

// Defense
import Bastion from './heroes/defense/bastion';
import Hanzo from './heroes/defense/hanzo';
import Junkrat from './heroes/defense/junkrat';
import Mei from './heroes/defense/mei';
import Torbjorn from './heroes/defense/torbjorn';
import Widowmaker from './heroes/defense/widowmaker';

const Home = () => (
  <div className="l-full">
    <div className="c-homeBox c-homeBox--heroes">
      <h2 className="c-homeBox__title">
        <a href="/heroes">
          Heroes
          <i className="fa fa-arrow-right"></i>
        </a>
      </h2>
    </div>
  </div>
);

const Heroes  = ({ match }) => (
  <div className="c-heroes">
    <div className="c-heroes__col">
      <ul className="c-heroesList">
        <li><Link to={`${match.url}/tracer`}>Tracer</Link></li>
        <li><Link to={`${match.url}/dva`}>Dva</Link></li>
        <li><Link to={`${match.url}/doomfist`}>Doomfist</Link></li>
        <li><Link to={`${match.url}/genji`}>Genji</Link></li>
        <li><Link to={`${match.url}/mccree`}>McCree</Link></li>
        <li><Link to={`${match.url}/pharah`}>Pharah</Link></li>
        <li><Link to={`${match.url}/reaper`}>Reaper</Link></li>
        <li><Link to={`${match.url}/soldier`}>Soldier: 76</Link></li>
        <li><Link to={`${match.url}/sombra`}>Sombra</Link></li>
        <li><Link to={`${match.url}/tracer`}>Tracer</Link></li>
        <li><Link to={`${match.url}/bastion`}>Bastion</Link></li>
        <li><Link to={`${match.url}/hanzo`}>Hanzo</Link></li>
        <li><Link to={`${match.url}/junkrat`}>Junkrat</Link></li>
        <li><Link to={`${match.url}/mei`}>MEI</Link></li>
        <li><Link to={`${match.url}/torbjorn`}>Torbjorn</Link></li>
        <li><Link to={`${match.url}/widowmaker`}>Widowmaker</Link></li>
      </ul>
    </div>

    <div className="c-heroes__col">
      <div className="c-heroes__content">
        {/*<Route path={`${match.url}/:heroId`} component={Hero} />      */}
        {/*<Route path={`${match.url}/dva`} component={Dva} />*/}

        {/*Offense*/}
        <Route path={`${match.url}/doomfist`} component={Doomfist} />
        <Route path={`${match.url}/genji`} component={Genji} />
        <Route path={`${match.url}/mccree`} component={McCree} />
        <Route path={`${match.url}/pharah`} component={Pharah} />
        <Route path={`${match.url}/reaper`} component={Reaper} />
        <Route path={`${match.url}/soldier`} component={Soldier} />
        <Route path={`${match.url}/sombra`} component={Sombra} />
        <Route path={`${match.url}/tracer`} component={Tracer} />

        {/*Defense*/}
        <Route path={`${match.url}/bastion`} component={Bastion} />
        <Route path={`${match.url}/hanzo`} component={Hanzo} />
        <Route path={`${match.url}/junkrat`} component={Junkrat} />
        <Route path={`${match.url}/mei`} component={Mei} />
        <Route path={`${match.url}/torbjorn`} component={Torbjorn} />
        <Route path={`${match.url}/widowmaker`} component={Widowmaker} />

        <Route
          exact
          path={match.url}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    </div>
  </div>
)

const Hero = ({ match }) => (
  <div>
    <h3>{match.params.heroId}</h3>

    <Route path={`${match.url}/tracer`} component={Tracer} />

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
              <Link to="/heroes">Heroes</Link>
            </li>
          </ul>

          <div className="l-page">
            <Route exact path="/" component={Home} />
            <Route path="/heroes" component={Heroes} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;