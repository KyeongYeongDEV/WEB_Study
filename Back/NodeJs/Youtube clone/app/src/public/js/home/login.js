"use-script";

const id = document.querySelector("#id"), // '#'을 붙이므로 태그에 id의 id를 가져와달라
  psword = document.querySelector("#password"),//태그의 id의 password를 가져와달라
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req={
        id : id.value,
        psword: psword.value,
    };

    fetch("/login",{//fetch는 객체형태로 값을 줘야 함
        method: "POST",//rest API 형태
        headers:{//
            "Content-Type" : "application/json" //내가 보내는 데이터 타입 명시
        },
        body: JSON.stringify(req),//오브젝트 형태를 json 형태로 바꿔준다 = 문자열(" ")로 감싸져 있다
    })
    .then((res) => res.json())
    .then((res)=>{
        if(res.success){ //로그인에 성공햇다면
            location.href = "/"; // 이 경로로 이동
        }else{ // 실패시
            alert(res.msg); //msg 를 alert를 통해 띄운다.
        }
    })
    .catch((err)=>{ //에러 잡기
        console.error(new Error("로그인 중 에러 발생"));
    });
}
