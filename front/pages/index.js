import React, { useEffect } from 'react';
import { Form, Input, Button, Card, Avatar } from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../reducers/user';

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
  const dispatch = useDispatch()
  const { isLogin, user } = useSelector(state => state.user)
  useEffect(() => {
    dispatch(loginAction)
    dispatch(logoutAction)
    dispatch(loginAction)
  }, [])

  return (
    <>
      <div>
        {isLogin
          ? <div>{`로그인 했습니다. ${user.nickname}`}</div>
          : <div>{`로그아웃 했습니다.`}</div>
        }
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