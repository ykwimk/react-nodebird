import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import reducer from '../reducers/index';
import { createStore, compose, applyMiddleware } from 'redux';

const NodeBird = ({ Component, store }) => {
  return (
    <>
      <Head>
        <title>Node-Bird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.4.0/antd.css" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  )
}

NodeBird.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object,
}

export default withRedux((initialState, options) => {
  const middleWares = []
  const enhancer = compose(
    applyMiddleware(...middleWares),
    typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f,
  )
  const store = createStore(reducer , initialState, enhancer )

  return store
})(NodeBird);