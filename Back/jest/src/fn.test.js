const fn = require("./fn")

// 예외가 발생하면 무조건 pass
// 특정 에러인지 알고 싶다면 toThrow()에 전달을 해보면 된다.
test("이거 왜 에러 나나요?",()=>{
    expect(()=> fn.throwErr()).toThrow("oo")
    // toThrow()에 에러가 fn에 선언한 에러코드와는 다른 코드임으로 fail이 된다.
    // "oo"를 "xx"로 바꾸면 pass한다.
})

// const fn = {
//     add : (num1, num2)=>(num1 + num2),
//     makeUser : (name,age) =>({name, age, gender : undefined}),
//     throwErr : ()=>{
//         throw new Error("xx")
//     },
// }