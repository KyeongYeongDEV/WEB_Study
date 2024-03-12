const fn = require("./fn")

// test.only
// test.skip

let num =0

test("0 더하기 4 은 1",()=>{
    expect(fn.add(num,1)).toBe(1)
})
test("0 더하기 2 은 2",()=>{
    expect(fn.add(num,2)).toBe(2)
})
test("0 더하기 3 은 3",()=>{
    expect(fn.add(num,3)).toBe(3)
})
test.skip("0 더하기 4 은 4",()=>{
    // 이 test 만 스킴하고 실행하고 싶을 때
    // 주석 처리를 해도 되지만 
    // test.skip으로 해도 된다.
    expect(fn.add(num,4)).toBe(4)
    num = 10
})
test.only("0 더하기 5 은 5",()=>{
    //위에 test들은 다 pass이고 이것만 fail일 때
    // 다른 test는 스킵하고 이 test만 실행하고 싶을 때
    //test.only를 사용한다.
    expect(fn.add(num,5)).toBe(5) //원래는 5가 나와야 한다.
})