import React from 'react';
import { Flex, Box } from 'rebass';

import { CounterStateful } from './standard';
import { CounterHooks } from './hooks';

export default () => (
  <Flex>
    <Box p={3} width={1 / 2} color='magenta' bg='black'>
      <h1>Counter Stateful</h1>
      <CounterStateful />
    </Box>
    <Box p={3} width={1 / 2} color='white' bg='magenta'>
      <h1>Counter Hooks</h1>
      <CounterHooks />
    </Box>
  </Flex>
);
