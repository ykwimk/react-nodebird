import React, { useState } from 'react';
import { Form, Checkbox, Button, Input } from 'antd';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';


const SignUp = () => {
  const [ passwordCheck, setPasswordCheck ] = useState('')
  const [ term, setTerm ] = useState(false)
  const [ passwordCheckError, setPasswordCheckError ] = useState(false)
  const [ termError, setTermError ] = useState(false)

  const useInput = (e) => {
    const [ value, setValue ] = useState('')
    const handler = (e) => {
      setValue(e.target.value)
    }

    return [ value, handler ]
  }

  const onChangePasswordCheck = (e) => {
    setPasswordCheckError(e.target.value !== password)
    setPasswordCheck(e.target.value)
  }

  const onChangeTerm = (e) => {
    setTermError(false)
    setTerm(e.target.checked)
  }

  const onSubmit = (e) => {
    if (password !== passwordCheck) {
      return setPasswordCheckError(true)
    }
    if (!term) {
      return setTermError(true)
    }

    console.log({id,  nickname, password, passwordCheck, term})
  }

  const [ id, onChangeId ] = useInput('')
  const [ nickname, onChangeNickName ] = useInput('')
  const [ password, onChangePassword ] = useInput('')

  return(
    <>
      <Head>
        <title>Node-Bird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.4.0/antd.css" />
      </Head>
      <AppLayout>
        <Form onFinish={onSubmit} style={{ padding: '10px' }}>
          <div>
            <label htmlFor="userId">아이디</label>
            <br />
            <Input
              name="userId"
              value={id}
              required
              onChange={onChangeId}
            />
          </div>
          <div>
            <label htmlFor="nickName">닉네임</label>
            <br />
            <Input
              name="nickName"
              value={nickname}
              required
              onChange={onChangeNickName}
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <br />
            <Input
              type="password"
              name="password"
              value={password}
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="passwordCheck">비밀번호 확인</label>
            <br />
            <Input
              type="password"
              name="passwordCheck"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordCheckError && <p style={{ color: 'red' }}>비밀번호를 제대로 입력해주세요</p>}
          </div>
          <div>
            <Checkbox
              name="userTerm"
              checked={term}
              onChange={onChangeTerm}
            >
              위 내용이 맞습니다.
            </Checkbox>
            {termError && <p style={{ color: 'red' }}>체크를 해주세요</p>}
          </div>
          <div style={{ marginTop: '20px' }}>
            <Button type="primary" htmlType="submit">가입하기</Button>
          </div>
        </Form>
      </AppLayout>
    </>
  )
}

export default SignUp;