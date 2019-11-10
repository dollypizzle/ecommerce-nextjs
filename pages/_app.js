import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App, { Container } from 'next/app';
import rootReducer from '../src/store/reducers/rootReducer';
import Head from 'next/head';
// import setAuthorizationToken from '../src/components/utils/setAuthorizationToken';
// import jwtDecode from 'jwt-decode';
// import { setCurrentUser } from '../src/store/actions/authActions';
import withRedux from 'next-redux-wrapper';
import Layout from '../src/components/Layouts/Layout';

const stored = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

class MyApp extends App {
  // componentDidMount() {
  //   if (localStorage.jwtToken) {
  //     setAuthorizationToken(localStorage.jwtToken);
  //     stored.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  //   }
  // }

  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Head>
          <title>Dolmart</title>
        </Head>
        <Container>
          <Provider store={store}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </Container>

        <style global jsx>{`
          html {
            display: flex;
            flex-direction: column;
            position: relative;
            min-height: 100%;
          }
          body {
            flex: 1;
            margin: 0 0 100px;
          }
          #MyFoot {
            background-color: black;
            position: absolute;
            bottom: 0;
            width: 100%;
            left: 0;
            overflow: hidden;
          }
        `}</style>
      </>
    );
  }
}

export default withRedux(stored)(MyApp);
