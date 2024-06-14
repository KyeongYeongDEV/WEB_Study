type signInUser={
    userId : string,
    userPw : string,
}

type signUpUser ={
    userID : string,
    userPw : string,
    userName : string,
    email : string,
}

type userPayload ={
    userName : string,
    userId : string
}

export {signInUser, signUpUser, userPayload};