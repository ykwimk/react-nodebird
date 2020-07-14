import React from 'react';
import { Card, Avatar } from 'antd';
import { useSelector } from 'react-redux';

const LoginCard = () => {
  const { user } = useSelector(state => state.user)
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
    </Card>
  )
}

export default LoginCard;