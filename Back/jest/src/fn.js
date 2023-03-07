const fn = {
    add : (num1, num2)=>(num1 + num2),
    getName : callback =>{
        const name = "Mike"
        setTimeout(()=>{
            callback(name)
        },3000) //3초 뒤에 name을 callback에 남겨준다.
    },
    getAge : ()=>{ 
        const age = 30
        return new Promise((res,rej) =>{ //Promise로 return 을 하면 jest 는 resolve 될 때까지 기다려 준다.
            setTimeout(()=>{
                //res(age)
                rej('error')
            },3000)
        })
    }
}

module.exports = fn