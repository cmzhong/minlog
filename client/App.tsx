import * as React from 'react';
import { hot } from "react-hot-loader/root";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';
import Map from './components/Map';
import './stylesheets/styles.scss'

interface Props {
}

class App extends React.Component<Props> {
  render() {
    return (
      <>
        <h1>minlog</h1>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          <Switch>
            <Route path ="/about">
              <About />
            </Route>
            <Route path="/">
              <Map />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default hot(App);