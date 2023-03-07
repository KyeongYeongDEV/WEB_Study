const fn = require("./fn")

let num =10

beforeEach(()=>{ // test들을 실행해주기 전에 수를 초기화
    num =0
})

afterEach(()=>{ // test가 끝나면 다음으로 초기화 해준다.
    num = 0
})

// test 를 실행할 때마다 num의 값이 바뀌지만 위의 beforEach 나 afterEach 덕에 잘 초기화 되어 진행한다.
test('0 더하기 1 은 1 이야', ()=>{
    num = fn.add(num,1)
    expect(num).toBe(1)
})
test('0 더하기 2 은 2 이야', ()=>{
    num = fn.add(num,2)
    expect(num).toBe(2)
})
test('0 더하기 3 은 3 이야', ()=>{
    num = fn.add(num,3)
    expect(num).toBe(3)
})
test('0 더하기 4 은 4 이야', ()=>{
    num = fn.add(num,4)
    expect(num).toBe(4)
})
// ------------------------------------

let user

// 디비에 유저 정보는 최초에 한 번 최후에 한 번 가져와 저장한 후 재활용하는 게 좋기 때문에
// Each 를 쓰는 것이 아니라 All 을 쓴다

beforeAll(async()=>{
    user = await fn.connectUserDb()
})
afterAll(()=>{
    return fn.disconnectDb()
})

test("이름은 Mike", ()=>{
    expect(user.name).toBe("Mike")
})
test("나이는 30", ()=>{
    expect(user.age).toBe(30)
})
test("성별은 남성", ()=>{
    expect(user.gender).toBe("male")
})

// describe()를 이용해 비슷한 test 끼리 묶어준다.
describe("Car 관련 작업", ()=>{ // 괄호 안에 있는 문자열이 test에 대한 설명으로 나타난다.
    let car

    beforeAll(async()=>{
        car = await fn.connectCarDb()
    })
    afterAll(()=>{
        return fn.disconnectCarDb()
    })
    
    test("차량 이름은", ()=>{
        expect(car.name).toBe("z4")
    })
    test("브랜드는 bmw", ()=>{
        expect(car.brand).toBe('bmw')
    })
    test("색상은 red", ()=>{
        expect(car.color).toBe('red')
    })
})