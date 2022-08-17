"use-script";

const id = document.querySelector("#id"), // '#'을 붙이므로 태그에 id의 id를 가져와달라
  psword = document.querySelector("#password"),//태그의 id의 password를 가져와달라
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req={
        id : id.value,
        psword: psword.value,
    }
    console.log(req);
}
