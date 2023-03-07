const fn = require("./fn")

test('이름과 나이를 전달 받아서 객체를 반환해줘', ()=>{
    expect(fn.makeUser("Mike", 30)).toEqual({ //gender가 test에 없음에도 테스트가 통과한다.
        name :"Mike",
        age : 30,
    }) 
    
})

test('이름과 나이를 전달 받아서 객체를 반환해줘', ()=>{
    expect(fn.makeUser("Mike", 30)).toStrictEqual({ //좀 더 엄격하게 테스트를 하고 싶다면 toStrictEqual()로 test를 해줘야 한다.
        name :"Mike",
        age : 30,
    })
})

/* 
fn.js

const fn = {
    add : (num1, num2)=>(num1 + num2),
    makeUser : (name,age) =>({name, age, gender : undefined}),
}

module.exports = fn
*/