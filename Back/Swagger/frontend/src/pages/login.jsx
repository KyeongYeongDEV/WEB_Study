import React, { useState } from 'react';
import {Link} from "react-router-dom"
import axios from "axios"


const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [accessToken, setAeccessToken] = useState("");

  const apiUrl = "http://localhost:8000/api/auth/login" 

  

  const handlerUserId =  (e)=>{
    setUserId(e.target.value);
    console.log(e.target.value);
  }
  const handlerUserPw = (e)=>{
    setUserPw(e.target.value);
    console.log(e.target.value);

  }
  const handleLogin = async (e)=>{
    if(userId === "" || userPw === "") {
      alert("빈칸을 채워주세요");
      return;
    }
    try{
      e.preventDefault();
      
      const res = await axios.post(apiUrl,{
        userId : userId,
        userPw : userPw
      });
      //TODO: 토큰을 하면 밑에 다 수정
      setAeccessToken(res.data.accessToken);
      console.log(accessToken);
      
      if(res.status === 200) {
        alert("로그인 성공");
      }
      
      
    }catch(err){
      alert(err.response.data.err)
    }
  }


  return (
    (accessToken === ""?<>
    <div className="container-fluid">
    <div className="row justify-content-center mt-5">
      <div className="col-md-6 col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center mb-4">로그인</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="userId" className="form-label">아이디:</label>
                <input
                  type="text"
                  id="userId"
                  name="userId"
                  className="form-control"
                  onChange={handlerUserId}
                  placeholder="아이디 입력"
                  required
                />
              </div>             
              <div className="mb-3">
                <label htmlFor="userPW" className="form-label">비밀번호:</label>
                <input
                  type="password"
                  id="userPW"
                  name="userPW"
                  className="form-control"
                  onChange={handlerUserPw}
                  placeholder="비밀번호 입력"
                  required
                />
              </div>
              <button type="submit" onClick={handleLogin} className="btn btn-primary btn-block">로그인</button>
            </form>
            <p className="text-center mt-3">아직 회원이 아니신가요? <Link to="/signup">회원가입</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>:
     <div>
     <h1>Success login</h1>
     
   </div>
  )
  );
}

export default Login;