import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

const LoginCard = () => {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const onClickLogout = useCallback(() => {
    dispatch(logoutAction)
  }, [])

  return (
    <Card
      actions={[
        <div key="twit">ㅇㅇ<br />{user.post && user.post.length}</div>,
        <div key="following">팔로잉<br />{user.followings && user.followings.length}</div>,
        <div key="follower">팔로워<br />{user.followers && user.followers.length}</div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{user.nickname[0]}</Avatar>}
        title={user.nickname}
      />
      <Button onClick={onClickLogout}>로그아웃</Button>
    </Card>
  )
}

export default LoginCard;