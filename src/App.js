import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import styled, { createGlobalStyle } from 'styled-components';
import { Box } from 'rebass';

import {
  Home,
  Navigation,
  Counter,
  Clock,
  Toggle,
  TicTacToe
} from './components';

import * as ROUTES from './constants/routes';

// const GlobalStyle = createGlobalStyle(`
//   * { box-sizing: border-box; }
//   body{ margin: 0; }
// `);

function App() {
  return (
    <Box
      p={4}
      fontSize={4}
      width={[1, 1, 1, 1]}
      color='magenta'
      bg='papayawhip'
    >
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
    </Box>
  );
}

export default App;
