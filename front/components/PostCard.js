import React from 'react';
import { Button, Card, Avatar } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const PostCard = ({ item }) => {
  return (
    <Card
      key={+item.createdAt}
      cover={item.img && <img src={item.img} alt="example" />}
      actions={[
        <RetweetOutlined />,
        <HeartOutlined />,
        <MessageOutlined />,
        <EllipsisOutlined />
      ]}
      extra={<Button>팔로우</Button>}
    >
      <Card.Meta
        avatar={<Avatar>{item.user.nickname[0]}</Avatar>}
        title={item.user.nickname}
        description={item.content}
      />
    </Card>
  )
}

PostCard.PropTypes = {
  item: PropTypes.shape({
    user: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.object,
  })
}

export default PostCard;