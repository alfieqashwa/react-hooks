import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import { Navigation, Counter, Clock, Toggle } from './components';

import * as ROUTES from './constants/routes';

function Home() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />

        <hr />

        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.COUNTER} component={Counter} />
        <Route path={ROUTES.CLOCK} component={Clock} />
        <Route path={ROUTES.TOGGLE} component={Toggle} />
      </div>
    </Router>
  );
}

export default App;
