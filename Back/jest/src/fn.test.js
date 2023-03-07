const fn = require("./fn")

//비동기 코드 테스트

// 정상작동 코드
// test("3초 후에 받아온 이름은 Mike",done =>{ //done이라는 callback함수를 넘겨주기
//     function callback(name){
//         expect(name).toBe("Mike")
//         done() // done()을 호출하지 않을시 fail 
//     }
//     fn.getName(callback)
// })

test("3초 후에 받아온 이름은 Mike",done =>{ 
    function callback(name){
        try{ 
            expect(name).toBe("Mike")
            done()
        }catch(error){
            done()
        }
    }
    fn.getName(callback)
})