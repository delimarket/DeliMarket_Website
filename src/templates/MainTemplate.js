import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyles from '../assets/styles/globalStyles';
import mainTheme from '../assets/styles/theme';
import Navigation from '../components/Navigation';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.primaryWhite};
  width: 100vw;
  min-height: 100vh;
`;

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={mainTheme}>
      <>
        <Navigation />
        <Wrapper>{children}</Wrapper>
      </>
    </ThemeProvider>
  </>
);

export default MainTemplate;
