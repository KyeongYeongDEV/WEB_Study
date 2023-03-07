const fn = {
    add : (num1, num2)=>(num1 + num2),
    getName : callback =>{
        const name = "Mike"
        setTimeout(()=>{
            //callback(name)
            throw new Error('서버 에러')
        },3000) //3초 뒤에 name을 callback에 남겨준다.
    }
}

module.exports = fn