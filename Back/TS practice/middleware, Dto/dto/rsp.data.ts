import { rspRequestDto } from "./request/rsp-dto";

export class RspDto{
    private userRsp : String;
    private computerRsp : String | undefined;
    private result : String | undefined

    constructor(Rsp : rspRequestDto){
        this.userRsp = Rsp.userRsp;
        this.computerRsp = Rsp.computerRsp;
        this.result  = Rsp.result
    }

    public getUserRsp() :String{
        return this.userRsp;
    }

    public getComputerRsp() :String | undefined{
        return this.computerRsp;
    }

    public getresult() :String | undefined{
        return this.result;
    }
}