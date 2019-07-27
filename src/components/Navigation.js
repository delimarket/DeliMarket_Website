import React from 'react';
import styled from 'styled-components';

const NavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.primaryWhite};
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Navigation = () => (
  <NavigationWrapper>
    <div>O nas</div>
    <div>Zaloguj się</div>
  </NavigationWrapper>
);

export default Navigation;
