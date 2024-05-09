import bcrypt from "bcrypt"

class Crypto{
    private salt : string ;
    private saltRounds : number;

    constructor(saltRounds : number){
        this.salt = "";
        this.saltRounds = saltRounds;
        this.initCrypto();
    }

    async initCrypto(){
        this.salt = await bcrypt.genSalt(this.saltRounds);
    }

    async hash(plainPassword:string){
        return await bcrypt.hash(plainPassword, this.salt);
    }

    async isValid(plainPassword : string, hashedPassword : string) : Promise<boolean>{
        return bcrypt.compare(plainPassword, hashedPassword);
    }
}

export default Crypto;