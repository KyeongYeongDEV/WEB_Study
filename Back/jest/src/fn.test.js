const fn = require("./fn")

// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBelessThan 작다
// toBeLessThanEqual 작거나 같다

test("ID는 10자 이하여야 합니다.", ()=>{
    const id = "THE_BLACK"
    expect(id.length).toBeLessThanOrEqual(10)
})

test("비밀번호 4자리", ()=>{
    const pw = "1234"
    expect(pw.length).toBe(4)
})

test("0.1 더하기 0.2는 0.3입니다.", ()=>{
    expect(fn.add(0.1,0.2)).toBeCloseTo(0.3)
})