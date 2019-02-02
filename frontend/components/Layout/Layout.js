import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global.style';
import theme from '../styles/theme.style';
import Head from '../Head/Head';
import Header from '../Header/Header';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Head />
      <Header />
      <main>{children}</main>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
