import React from 'react';

import {
  Blogpost,
  Clock,
  Counter,
  LoginControl,
  Page,
  Reservation,
  Toggle
} from './components/stable';

export default () => (
  <div>
    <div>
      <Counter />
    </div>
    <div>
      <Clock />
    </div>
    <div>
      <Toggle />
    </div>
    <div>
      <LoginControl />
    </div>
    <div>
      <Page />
    </div>
    <hr />
    <div>
      <Blogpost />
    </div>
    <hr />
    <div>
      <h2>Reservation</h2>
      <Reservation />
    </div>
  </div>
);
