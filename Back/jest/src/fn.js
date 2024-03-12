const fn = {
    add : (num1, num2)=>(num1 + num2),
    connectUserDb : ()=>{
        return new Promise(res=>{ // 유저 정보 가져오기
            setTimeout(()=>{
                res({
                    name : "Mike",
                    age : 30,
                    gender : "male"
                })
            },500) //0.5초
        })
    },
    disconnectDb : ()=>{
        return new Promise(res=>{
            setTimeout(() => {
                res()
            }, 500);
        })
    },
    connectCarDb : ()=>{
        return new Promise(res=>{ // 유저 정보 가져오기
            setTimeout(()=>{
                res({
                    brand : 'bmw',
                    name : 'z4',
                    color: 'red'
                })
            },500) //0.5초
        })
    },
    disconnectCarDb : ()=>{
        return new Promise(res=>{
            setTimeout(() => {
                res()
            }, 500);
        })
    },


}

module.exports = fn