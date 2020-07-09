import React from 'react';
import { Form, Input, Button } from 'antd';

const dummy = {
  isLogin: true,
}

const Home = ({ isLogin }) => {
  return (
    <>
      <div>
        {dummy.isLogin &&
          <Form encType="multipart/form-data">
            <Input.TextArea maxLength={140} placeholder="여기다가 뭘 적을까요?" />
            <Button>이미지 업로드</Button>
            <Button type="primary" htmlType="submit" style={{ float: 'right' }}>ㅇㅇ</Button>
          </Form>
        }
      </div>
    </>
  )
}

export default Home;