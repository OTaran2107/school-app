import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './components/About';
import Groups from './components/groups/Groups';
import Students from './components/students/Students'
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__header">
          <div className="app__header__logo">
            <img src="https://i.imgur.com/V6qwVEv.png" alt="" />
          </div>
          <div>
            <Link className="app__header__link home" to="/about">About us</Link>
            <Link className="app__header__link groups" to="/groups">Groups</Link>
            <Link className="app__header__link students" to="/students">Students</Link>
          </div>
        </div>
        <div className="app__content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/groups">
              <Groups />
            </Route>
            <Route path="/students">
              <Students />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
