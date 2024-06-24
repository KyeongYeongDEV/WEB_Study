type RequestUser = {
    userName : string,
    userId : string,
    userPw : string,
    userEmail : string,
    rtoken : string
}

type UserPayload = {
    name : string,
    userId : string
}

type SigninUser ={
    userId : string,
    userPw : string
}

type SignupUser = {
    userName : string,
    userId : string,
    userPw : string,
    userEmail : string
}

type EmailStatus = {
    userId : string,
    userEmail : string,
    status : string,
    code : string
}

export {RequestUser, UserPayload, SigninUser, SignupUser, EmailStatus}