import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-start;
  border: 5px solid #9b59b6;
  min-height: '100vh';
`;

const Box = styled.div`
  flex: 1;
  color: hotpink;
  font-size: 20px;
  text-align: center;
  text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

export { Nav, Box };