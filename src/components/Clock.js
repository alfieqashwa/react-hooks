import React from 'react';
import { Flex, Box } from 'rebass';

import { ClockStateful } from './standard';
import { ClockHooks } from './hooks';

export default () => (
  <Flex>
    <Box p={3} width={1 / 2} color='magenta' bg='black'>
      <h1>Clock Stateful</h1>
      <ClockStateful />
    </Box>
    <Box p={3} width={1 / 2} color='white' bg='magenta'>
      <h1>Clock Hooks</h1>
      <ClockHooks />
    </Box>
  </Flex>
);
