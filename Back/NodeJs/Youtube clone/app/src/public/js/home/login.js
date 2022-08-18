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
        header:{//
            "Content-Type" : "applicationjson" //내가 보내는 데이터 타입 명시
        },
        body: JSON.stringify(req),//오브젝트 형태를 json 형태로 바꿔준다 = 문자열(" ")로 감싸져 있다

    });
}
