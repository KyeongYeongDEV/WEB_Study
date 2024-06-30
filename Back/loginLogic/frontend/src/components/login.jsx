import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import axios from 'axios';

const apiUrl = "http://localhost:8000/api/auth"

function Login() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [aToken, setAToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await axios.post(apiUrl + "/login", {
      userId : userId,
      userPw : userPw
    });

    if(res.status === 200){
      setAToken(res.data.accessToken);

      alert(res.data.msg)
    }else if(res.status === 404){
      alert(res.data.err)
    }
  };

  return (
    (aToken === ""?<>
    <div className="container">
      <h2>로그인</h2>
    
      <Form.Group controlId="formId">
        <Form.Label>아이디</Form.Label>
        <Form.Control
          type="id"
          placeholder="아이디를 입력하세요"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={userPw}
          onChange={(e) => setUserPw(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3" onClick = {handleSubmit}>
        로그인
      </Button>
    </div>
    </>:
    <div>
      <h1>Success login</h1>
    </div>
    )
  );
}

export default Login;
