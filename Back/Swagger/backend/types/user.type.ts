

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


type UserPayload = {
    name : string;
    userId : string;
}
export  {RequestUser, LoginUser, UserPayload};