import React from 'react';
import styled from 'styled-components';

import LoginForm from '../components/LoginForm';

const LandingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 100px;
  color: ${({ theme }) => theme.primaryBlue};
  margin: 0;
`;

const H3 = styled.h3`
  font-size: 30px;
  font-weight: normal;
  margin: 0;
`;

const Landing = () => (
  <LandingWrapper>
    <H1>DeliMarket</H1>
    <H3>Dostawa zakupów pod Twoje drzwi</H3>
    <LoginForm />
  </LandingWrapper>
);

export default Landing;
