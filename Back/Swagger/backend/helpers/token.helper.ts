import JWT from "jsonwebtoken"
import { UserPayload } from "../types/user.type";

class Token{
    private secret : string;
    static accessToken: any;

    constructor(secret : string){
        this.secret = secret;
    }

    generateToken(payload : UserPayload, expiresIn : string){
        const token = JWT.sign(payload, this.secret, {expiresIn});
    
        return token;
    }
    
    isVerifyToken(token :string){
        const decodedToken = JWT.verify(token, this.secret);
        return decodedToken;
    }
}

export default Token;