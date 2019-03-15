import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Nav, Box } from '../styles/Styles';
// import { Flex, Box } from 'rebass';

import * as ROUTES from '../constants/routes';

const Navigation = () => (
  <Nav>
    <Box as={Link} to={ROUTES.HOME}>
      HOME
    </Box>
    <Box as={Link} to={ROUTES.COUNTER}>
      Counter
    </Box>
    <Box as={Link} to={ROUTES.CLOCK}>
      Clock
    </Box>
    <Box as={Link} to={ROUTES.TICTACTOE}>
      TicTacToe
    </Box>
  </Nav>
);

export default Navigation;
