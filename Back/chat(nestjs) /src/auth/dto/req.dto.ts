export class SignUpReqDto{
    name : string;
    email : string;
    password : string;
    passwordComfirm : string;
}

export class SignInReqDto{
    email : string;
    password : string;
}
