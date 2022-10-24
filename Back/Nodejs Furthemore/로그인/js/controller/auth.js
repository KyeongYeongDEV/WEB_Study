const loginBtn = document.querySelector('loginBtn')

const authUser = (userid, userpw)=>new Primise((resolve, reject)=>{
    for(v in userSchema){
        if(userSchema[v]['userid'] == userid && userSchema[v]['userpw'] == userpw){
            resolve({
                msg:'login succeed',
                loginState : true,
                userData: {userid:userid, username:userSchema[v]['username']}})
        }
    }
    reject({msg: 'login fail', loginState:false})
})

const setUser = ()=>{
    const userid = document.getElementById("id").value;
    const userpw = document.getElementById("pw").value;

    authUser(userid, userpw).then((value)=>{
        cocalstorage.setItem('userData', JSON.stringify(value.userData));
        alert(value.msg);
        location.href = './main.html'
    })
    .catch((value=>{
        alert(value.msg)
    }))
}

loginBtn.addEventListener('click',setUser);