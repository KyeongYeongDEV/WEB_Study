type RequestUser = {
    userName : string,
    userId : string,
    userPw : string,
    userEmail : string,
    rtoken : string
}

type SigninUser ={
    userId : string,
    userPw : string
}

type EmailStatus = {
    userId : string,
    userEmail : string,
    status : string,
    code : string
}

export {RequestUser, SigninUser, EmailStatus}