import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import {
  Home,
  Navigation,
  Counter,
  Clock,
  Toggle,
  TicTacToe
} from './components';

import * as ROUTES from './constants/routes';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <div style={{ textAlign: 'center' }}>
          <Navigation />
          <br />

          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.COUNTER} component={Counter} />
          <Route path={ROUTES.CLOCK} component={Clock} />
          <Route path={ROUTES.TOGGLE} component={Toggle} />
          <Route path={ROUTES.TICTACTOE} component={TicTacToe} />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
