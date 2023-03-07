const fn = require("./fn")

//비동기 코드 테스트

test("3초 후 나이 30", async ()=>{
    // const age = await fn.getAge()
    // expect(age).toBe(30)

    //위에랑 같음
    await expect(fn.getAge()).resolves.toBe(30)
})