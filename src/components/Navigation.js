import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';

const Navigation = () => (
  <nav>
    <li>
      <Link to={ROUTES.HOME}>HOME</Link>
    </li>
    <Link to={ROUTES.COUNTER}>Counter</Link>
    <li>
      <Link to={ROUTES.CLOCK}>Clock</Link>
    </li>
    <li>
      <Link to={ROUTES.TICTACTOE}>TicTacToe</Link>
    </li>
  </nav>
);

export default Navigation;
