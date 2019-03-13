import React from 'react';

import { ToggleStateful } from './standard';
import { ToggleHooks } from './hooks';

export default () => (
  <React.Fragment>
    <h1>Toggle Stateful Component</h1>
    <ToggleStateful />
    <h1>Toggle Hooks</h1>
    <ToggleHooks />
  </React.Fragment>
);
