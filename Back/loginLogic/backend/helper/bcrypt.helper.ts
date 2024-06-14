import bcrypt from "bcrypt";

class Bcrypt{
    private salt : string;
    private saltRounds :   number;

    constructor(saltRounds : number){
        this.salt = "",
        this.saltRounds = saltRounds;

    }

    async initBcrypt(){
        this.salt = await bcrypt.genSalt(this.saltRounds);
    }

    async hash(plainPassWord : string){
        return await bcrypt.hash(plainPassWord, this.salt);
    }
    async isValid(plainPassWord : string, hashedPassWord : string){
        return bcrypt.compare(plainPassWord, hashedPassWord);
    }
}

export default Bcrypt;