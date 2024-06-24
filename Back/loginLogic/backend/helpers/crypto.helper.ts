import bcrypt  from "bcrypt";

export default class crypto{
    private salt : string;
    private saltRounds : number;

    constructor(saltRounds : number){
        this.saltRounds = saltRounds;
        this.salt = "";
        this.initCrypto();
    }

    async initCrypto(){
        this.salt = await bcrypt.genSalt(this.saltRounds);
    }

    async hash(plainPassword : string){
        return await bcrypt.hash(plainPassword, this.salt);
    }

    async isVailed(plainPassword : string, hashedPassword : string) : Promise<boolean>{
        return bcrypt.compare(plainPassword, hashedPassword);
    }
}