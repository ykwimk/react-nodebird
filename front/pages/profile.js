import React from 'react';
import { Form, Input, Button, List, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
  return(
    <>
      <div>
        <NicknameEditForm />
        <List
          style={{ marginBottom: '20px' }}
          grid={{ gutter: 4, xs: 2, md: 3 }}
          size="small"
          header={<div>팔로잉 리스트</div>}
          loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
          bordered
          dataSource={[ 'ykwimk', '111', 'no answer' ]}
          renderItem={item => (
            <List.Item style={{ marginTop: '20px' }}>
              <Card actions={[ <StopOutlined /> ]}>
                <Card.Meta description={item} />
              </Card>
            </List.Item>
          )}
        />
        <List
          style={{ marginBottom: '20px' }}
          grid={{ gutter: 4, xs: 2, md: 3 }}
          size="small"
          header={<div>팔로워 리스트</div>}
          loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
          bordered
          dataSource={[ 'ykwimk', '111', 'no answer' ]}
          renderItem={item => (
            <List.Item style={{ marginTop: '20px' }}>
              <Card actions={[ <StopOutlined /> ]}>
                <Card.Meta description={item} />
              </Card>
            </List.Item>
          )}
        />
      </div>
    </>
  )
}

export default Profile;