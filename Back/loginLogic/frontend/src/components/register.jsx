// src/components/Register.js
import React,{useState} from 'react';

function Register() {
  const [userName, setUserName] = useState("");
  const [userId,setUserId] = useState("");
  const [userPw,setUserPw] = useState("");
  const [userEmail,setEamil] = useState("");
  const [userCode,setUserCode] = useState("");

  const handleUserId = (e)=>{

  }
  const handleUserPw = (e)=>{
    
  }
  const handleUserEmail = (e)=>{
    
  }
  const handleUserCode = (e)=>{
    
  }

  const handleSubmitBtn = (e)=>{
    e.preventDefault();

  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">회원가입</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">사용자 이름</label>
              <input type="text" className="form-control" id="username" placeholder="사용자 이름을 입력하세요" />
            </div>
            <div className="form-group">
              <label htmlFor="email">이메일 주소</label>
              <input type="email" className="form-control" id="email" placeholder="이메일을 입력하세요" />
            </div>
            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input type="password" className="form-control" id="password" placeholder="비밀번호를 입력하세요" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">비밀번호 확인</label>
              <input type="password" className="form-control" id="confirmPassword" placeholder="비밀번호를 다시 입력하세요" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">회원가입</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
