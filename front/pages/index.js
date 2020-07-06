import React from 'react';
import Link from 'next/link'
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Home = () => {
  return (
    <>
      <Head>
        <title>Node-Bird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.4.0/antd.css" />
      </Head>
      <AppLayout>
        <div>hello next</div>
      </AppLayout>
    </>
  )
}

export default Home;