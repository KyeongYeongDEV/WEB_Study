type SignInUser={
    userId : string,
    userPw : string,
}

type SignUpUser ={
    userId : string,
    userPw : string,
    userName : string,
    email : string,
}

type EmailStatus={
    email : string,
    status : string,
    code : string
}


type UserPayload = {
    name : string;
    userId : string;
}

export {SignInUser, SignUpUser, UserPayload, EmailStatus};