import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Profile = () => {
  return(
    <>
      <Head>
        <title>Node-Bird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.4.0/antd.css" />
      </Head>
      <AppLayout>
        <div>profile</div>
      </AppLayout>
    </>
  )
}

export default Profile;