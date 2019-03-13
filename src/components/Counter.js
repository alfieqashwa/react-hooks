import React from 'react';

import { CounterStateful } from './standard';
import { CounterHooks } from './hooks';

export default () => (
  <React.Fragment>
    <h1>Counter Stateful Component</h1>
    <CounterStateful />
    <h1>Counter Hooks</h1>
    <CounterHooks />
  </React.Fragment>
);
