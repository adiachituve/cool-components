import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './style/base.scss';

import Photos from './Photos';
import Search  from './Search';
import Animations from './Animations';

class App extends React.Component {

    render() {
        return (
            <Router>
                <nav className="nav-menu">
                    <div className="logo">SciDex</div>
                    <ul className="nav-menu-list">
                        <li>
                            <Link to="/">Photos</Link>
                        </li>
                        <li>
                            <Link to="/search/">Search</Link>
                        </li>
                        <li>
                            <Link to="/animations/">Animations</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Photos}/>
                <Route path="/search/" component={Search}/>
                <Route path="/animations/" component={Animations}/>
            </Router>
        );
    }

}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);