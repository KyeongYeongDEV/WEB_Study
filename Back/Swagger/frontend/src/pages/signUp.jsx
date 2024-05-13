import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from "axios";

function SignUp(){
    const [name, setName] = useState("");
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    

    const apiUrl = "http://localhost:8000/api/auth/join";

    const handlerName = (e)=>{
        setName(e.target.value);
        console.log(e.target.value)
    }
    const handlerUserId = (e)=>{
        setUserId(e.target.value);
        console.log(e.target.value)
    }    
    const handlerEmail =()=>{

    }
   
    const handlerEmailAuth = ()=>{

    }
    const handlerEmailvaild = ()=>{

    }

    const handlerUserPw = (e)=>{
        setUserPw(e.target.value);
        console.log(e.target.value)
    }
    const handlerJoin = async (e)=>{
      if(userId === "" || userPw === "" || name === ""){
        alert("빈칸을 채워주세요!");
        return;
      } 
      try{
        e.preventDefault();

        
        const res = await axios.post(apiUrl,{
            userName : name,
            userId : userId,
            userPw : userPw
        });
        if(res.status === 200){
            alert("성공적으로 가입했습니다");
        }   

        console.log(res.data)

        
      }catch(err){
          console.log(err);
          alert(err.response.data.err);
      }  
    }

    return (
        <div className="container-fluid">
          <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center mb-4">회원가입</h5>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="userName" className="form-label">사용자명:</label>
                      <input 
                        type="text"
                        id="userName" 
                        name="userName" 
                        className="form-control" 
                        onChange={handlerName}
                        placeholder="이름 입력"
                        required  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userId" className="form-label">아이디:</label>
                        <input 
                        type="userId" 
                        id="userId" 
                        name="userId" 
                        className="form-control" 
                        onChange={handlerUserId}
                        placeholder="아이디 입력"
                        required 
                    />
                     <div className="mb-3">
                <label htmlFor="userEmail" className="form-label">이메일:</label>
                <input
                  type="text"
                  id="userEmail"
                  name="userEmail"
                  className="form-control" 
                  onChange={handlerEmail}
                  placeholder="이메일 입력"
                  required
                />
                </div>
                <div className="input-group mb-3">
                <input 
                    type = 'text'
                    id = "emailAuth"
                    name = 'emailAuth'
                    onChange={handlerEmailvaild}
                    className="form-control" 
                    placeholder = "인증 번호 입력"
                    />
                  <button type="submit" onClick={handlerEmailAuth} className="btn btn-primary btn-block">인증</button>
                </div>
              
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
                    <button type="submit" onClick={handlerJoin} className="btn btn-primary btn-block">가입하기</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default SignUp;