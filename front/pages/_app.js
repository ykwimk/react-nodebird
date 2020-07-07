import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const NodeBird = ({ Component }) => {
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

export default NodeBird;