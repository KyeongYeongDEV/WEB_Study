import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Join(){
    const [name, setName] = useState("");
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const handlerName = (e)=>{
        setName(e.target.value);
        console.log(e.target.value)
    }
    const handlerUserId = (e)=>{
        setUserId(e.target.value);
        console.log(e.target.value)
    }
    const handlerUserPw = (e)=>{
        setUserPw(e.target.value);
        console.log(e.target.value)
    }
    const handlerJoin = (e)=>{
        e.preventDefault();
        console.log(name, userId, userPw)
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

export default Join;