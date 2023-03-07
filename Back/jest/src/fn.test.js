const fn = require("./fn")

//toMatch
test("Hello world 에 a 라는 글자가 있나?", ()=>{
    expect("Hello world").toMatch(/a/)
    // a 라는 문자가 없으므로 실패
})
test("Hello world 에 H 라는 글자가 있나?", ()=>{
    expect("Hello world").toMatch(/h/i)
    // 대소문자 구분을 없애주기 위해 끝에 i를 붙인다 
})


//toCotain
test("User List 에서 Mike 가 있나",()=>{
    const user = "Mike"
    const userList = ["Tom", "Mike", "Kai"]
    expect(userList).toContain(user) 
})