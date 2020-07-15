import React from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector } from 'react-redux';

const PostForm = () => {
  const { imagePaths } = useSelector(state => state.post)

  return (
    <Form encType="multipart/form-data" style={{ margin: '10px 0 20px' }}>
      <div>
        <Input.TextArea maxLength={140} placeholder="여기다가 뭘 적을까요?" />
        <Button>이미지 업로드</Button>
        <Button type="primary" htmlType="submit" style={{ float: 'right' }}>ㅇㅇ</Button>
      </div>
      <div>
        {imagePaths && imagePaths.map((v, i) => {
          return (
            <div key={v} style={{ display: 'inline-block' }}>
              <img src={`http://localhost:3000/${v}`} style={{ width: '200px' }} alt={v} />
              <div>
                <Button >제거</Button>
              </div>
            </div>
          )
        })}
      </div>
    </Form>
  )
}

export default PostForm;