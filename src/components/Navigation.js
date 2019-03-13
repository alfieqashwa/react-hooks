import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';

import * as ROUTES from '../constants/routes';

const StyledLink = styled(Link)`
  color: white;
`;

const Navigation = () => (
  <Flex>
    <Box p={3} width={1 / 2} color='white' bg='teal'>
      <StyledLink to={ROUTES.HOME}>HOME</StyledLink>
    </Box>
    <Box p={3} width={1 / 2} color='white' bg='teal'>
      <StyledLink to={ROUTES.COUNTER}>Counter</StyledLink>
    </Box>
    <Box p={3} width={1 / 2} color='white' bg='teal'>
      <StyledLink to={ROUTES.CLOCK}>Clock</StyledLink>
    </Box>
  </Flex>
);

export default Navigation;
