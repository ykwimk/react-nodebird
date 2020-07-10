import React from 'react';
import { Form, Input, Button, Card, Avatar } from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const dummy = {
  isLogin: true,
  imagePaths: [],
  mainPosts: [{
    user: {
      id: 1,
      nickname: 'ykwimk',
    },
    content: 'asdfdasf'
  }],
}

const Home = () => {
  return (
    <>
      <div>
        {dummy.isLogin && <PostForm dummy={dummy} />}
        {dummy.mainPosts.map((c) => {
          return (
            <PostCard key={c} item={c} />
          )
        })}
      </div>
    </>
  )
}

export default Home;