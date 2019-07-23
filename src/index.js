import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './style/base.scss';

import Photos from './Photos'

class App extends React.Component {

  render() {
      return (
          <Router>
                  <nav>
                      <ul className="nav-menu">
                          <li>
                              <Link to="/">Photos</Link>
                          </li>
                      </ul>
                  </nav>

                  <Route path="/" exact component={Photos} />
          </Router>
      );
  }

}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);