const loginBtn = document.querySelector('.loginBtn')

const authUser=(userid, userpw)=>new Promise((resolve, reject) =>{
    for(v in userSchema){
        if(userSchema[v]['userid'] == userid && userSchema[v]['userpw']==userpw){
            resolve({msg:'login succeed', 
                    loginState:true, 
                    userData:{userid:userid,username:userSchema[v]['username']}})
        }
    }
    reject({msg:'login fail', loginState:false})
})
const setUser=()=>{
    const userid = document.getElementById("id").value;
    const userpw = document.getElementById("pw").value;
    authUser(userid,userpw)
        .then((value)=>{
            localStorage.setItem('userData',JSON.stringify(value.userData))
            alert(value.msg)
            location.href = './main.htm'
        })
        .catch((value)=>{
            alert(value.msg)
        })
}


loginBtn.addEventListener('click',setUser)

