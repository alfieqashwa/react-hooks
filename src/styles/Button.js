import styled, { css } from 'styled-components';

export const Button = styled.button`
  color: black;
  background-color: magenta;

  ${props =>
    props.hooks &&
    css`
      color: magenta;
      background-color: black;
    `}

  ${props =>
    props.reset &&
    css`
      color: white;
      background-color: teal;
    `}
`;
