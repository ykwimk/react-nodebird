import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import { useInput } from '../pages/signup';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';

const LoginForm = () => {
  const [ userId, onChangeId ] = useInput('')
  const [ userPassword, onChangePassword ] = useInput('')
  const dispatch = useDispatch()

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    dispatch(loginAction)
    console.log({ userId, userPassword })
  }, [userId, userPassword])

  return (
    <Form style={{ padding: '10px' }}>
      <div>
        <label htmlFor="userId">아이디</label>
        <br />
        <Input name="userId" value={userId} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="userPassword">비밀번호</label>
        <br />
        <Input name="userPassword" value={userPassword} onChange={onChangePassword} required />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Button type="primary" htmlType="submit" loading={false} onClick={onSubmit}>
          로그인
        </Button>
        <Link href="/signup">
          <a><Button>회원가입</Button></a>
        </Link>
      </div>
    </Form>
  )
}

export default LoginForm;