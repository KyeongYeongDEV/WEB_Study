const fn = require("./fn")

test('이름과 나이를 전달 받아서 객체를 반환해줘', ()=>{
    expect(fn.makeUser("Mike", 30)).toBe({
        name :"Mike",
        age : 30,
    }) 
    //조건을 같게 해줘도 객체는 재귀형식으로 검사를 해야 함으로 아래와 같이 해줘야 한다.
})

test('이름과 나이를 전달 받아서 객체를 반환해줘', ()=>{
    expect(fn.makeUser("Mike", 30)).toEqual({ //toBe가 아니라 toEqual() 해줘야 한다.
        name :"Mike",
        age : 30,
    })
})