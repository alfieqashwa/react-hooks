import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.HOME}>HOME</Link>
      </li>
      <li>
        <Link to={ROUTES.COUNTER}>Counter</Link>
      </li>
      <li>
        <Link to={ROUTES.CLOCK}>Clock</Link>
      </li>
      <li>
        <Link to={ROUTES.TOGGLE}>Toggle</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
