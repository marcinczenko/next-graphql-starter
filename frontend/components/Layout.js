import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Head from './Head';
import Header from './Header';

const theme = {
  black: '#393939'
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    color: ${theme.black};
  }

  a {
    text-decoration: none;
  }
`;

const Layout = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Head />
      <Header />
      <main>{props.children}</main>
    </>
  </ThemeProvider>
);

export default Layout;
