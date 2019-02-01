import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global.style';
import theme from '../styles/theme.style';
import Head from '../Head/Head';
import Header from '../Header/Header';

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

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default Layout;
