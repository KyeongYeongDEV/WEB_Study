const fn = require("./fn")

//비동기 코드 테스트

//Promise 사용
test("3초 후에 error 가 납니다",() =>{ 
    // return fn.getAge().then(age=>{
    //     expect(age).toBe(30)
    // })

    //resolves test
    // return expect(fn.getAge()).resolves.toBe(30) 

    //rejects test
    return expect(fn.getAge()).rejects.toMatch('error') 
})

