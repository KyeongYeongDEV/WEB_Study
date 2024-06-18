import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from "axios"

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState('');

  const apiUrl = "http://localhost:8000/api/auth/"

  const handlerName =(e)=>{
    e.preventDefault();
    setName(e.target.value);
    console.log(e.target.value)
  }
  
  const handlerUserPw = (e)=>{
    e.preventDefault();
    setUserPw(e.target.value)
    console.log(e.target.value)
  }
  const handlerEmail = (e)=>{
    e.preventDefault();
    setEmail(e.target.value)
    console.log(e.target.value)
  }
  const handlerComfirmPassword = (e)=>{
    e.preventDefault();
    setConfirmPassword(e.target.value)
    console.log(e.target.value)
  }
  const handlerCode = (e)=>{
    e.preventDefault();
    setCode(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({name, userId, userPw})

    // // 회원가입 처리 로직을 여기에 추가하세요
    // const res = await axios.post(apiUrl,{
    //   userId : userId,
    //   userPw : userPw,
    //   name : name,
    //   email : email,
    // })

    // if(res.status === 200){
    //   alert("회원가입 성공!")
    // }else{
    //   alert("회원가입 실패")
    // }
  };
  const handleSendEmailCode = ()=>{
    console.log("코드 발송")
  }
  const handleConfirmCode =()=>{
      console.log("코드 확인")
  }

  return (
    <div className="container mt-5">
      <h2>회원가입</h2>
      <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름를 입력하세요"
            value={name}
        onChange={handlerName}
          />
        </Form.Group>
      
        <Form.Group controlId="formUserId" className="mb-3">
          <Form.Label>아이디</Form.Label>
          <Form.Control
            type="text"
            placeholder="아이디를 입력하세요"
            value={userId}
        onChange={(e) => setUserId(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>이메일 주소</Form.Label>
          <Row className="align-items-center">
            <Col xs={9}>
              <Form.Control
                type="email"
                placeholder="이메일을 입력하세요"
                value={email}
                onChange={handlerEmail}
              />
            </Col>
            <Col xs={3} className="text-end">
              <Button variant="primary" type="button" className="w-100" onClick={handleConfirmCode}>
                인증 코드 발송
              </Button>
            </Col>
          </Row>
        </Form.Group> 

        <Form.Group controlId="formCode" className="mb-3">
          
          <Row className="align-items-center">
            <Col xs={9}>
              <Form.Control
                type="text"
                placeholder="인증코드를 입력하세요"
                value={code}
                onChange={handlerCode} // 인증 코드 상태 변경
              />
            </Col>
            <Col xs={3} className="text-end">
              <Button variant="primary" type="button" className="w-100" onClick={handleSendEmailCode}>
                확인
              </Button>
            </Col>
          </Row>
        </Form.Group>
        
        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="userPw"
            placeholder="비밀번호를 입력하세요"
            value={userPw}
            onChange={handlerUserPw}
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword" className="mb-3">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 다시 입력하세요"
            value={confirmPassword}
            onChange={handlerComfirmPassword}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3" onClick={handleSubmit}>
          회원가입
        </Button>
      
    </div>
  );
}

export default RegistrationForm;
