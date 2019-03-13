import React from 'react';

import { ClockStateful } from './standard';
import { ClockHooks } from './hooks';

export default () => (
  <React.Fragment>
    <h1>Clock Stateful Component</h1>
    <ClockStateful />
    <h1>Clock Hooks</h1>
    <ClockHooks />
  </React.Fragment>
);
