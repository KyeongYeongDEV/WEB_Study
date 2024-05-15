

type RequestUser = {

    userName :  string,
    userId : string,
    userPw : string,
    userEmail : string
};

type LoginUser ={
    userId : string,
    userPw : string
}

export  {RequestUser, LoginUser};