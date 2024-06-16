// src/components/Login.js
import { Collapse } from 'bootstrap';
import React, { useState } from 'react';

const apiUrl = "http://localhost:8000/"

function Login() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw]  = useState("");

  const handleUserId = (e)=>{
    setUserId(e.target.value)
    console.log(e.target.value);
  }
  const handleUserPw = (e)=>{
    setUserPw(e.target.value)
    console.log(e.target.value);
  }
  const handleSubmitBtn = (e)=>{
    
  }

  


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">로그인</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">아이디</label>
              <input type="email" className="form-control" id="userName" placeholder="아이디를 입력하세요" onChange={handleUserId}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input type="password" className="form-control" id="password" placeholder="비밀번호를 입력하세요" onChange={handleUserPw}/>
            </div>
            <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmitBtn}>로그인</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
