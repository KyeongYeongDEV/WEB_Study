import React, { useState } from 'react';
import axios from "axios";

const apiUrl = "http://localhost:8000/api/auth/signin"

function Login() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw]  = useState("");
  const [accessToken, setAeccessToken] = useState("")

  const handleUserId = (e)=>{
    setUserId(e.target.value)
    console.log(e.target.value);
  }
  const handleUserPw = (e)=>{
    setUserPw(e.target.value)
    console.log(e.target.value);
  }
  const handleSubmitBtn = async(e)=>{
    try{
      e.preventDefault();

      const res = axios.post(apiUrl,{
        userId : userId,
        userPw : userPw
      })
      console.log(res.data)
      if(res.status === 200){
        alert(res.msg)
        
      }else{
        throw new Error(res.msg);
      }
    }catch(err){
      alert(err);
    }
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
            <button type="submit" onClick={handleSubmitBtn} className="btn btn-primary btn-block" >로그인</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
