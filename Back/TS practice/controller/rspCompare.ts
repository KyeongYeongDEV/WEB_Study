import { rspRequestDto } from "../dto/request/rsp-dto";

export class rspCompare{
    private userRsp:String;
    private computerRsp : String|undefined;
    private result : String | undefined;

    constructor(reqRsp : rspRequestDto){
        this.userRsp = reqRsp.userRsp;
        this.computerRsp = reqRsp.computerRsp;
        this.result = reqRsp.result;
    }

    public resultOfGame() : rspRequestDto{
        const renNum = Math.floor(Math.random() * (4-1) +1); //1~3
    
        if(renNum === 1){
            this.computerRsp = "가위"
        }else if(renNum === 2){
            this.computerRsp = "바위"
        }else if(renNum === 3){
            this.computerRsp = "보"
        }
    
        if(this.userRsp === "가위"){
            if(this.computerRsp === "가위"){
                this.result = "비겼습니다"
            }
            else if(this.computerRsp === "바위"){
                this.result = "졌습니다"
            }else{
                this.result = "이겼습니다"
            }
        }
        else if(this.userRsp === "바위"){
            if(this.computerRsp === "가위"){
                this.result = "이겼습니다"
            }
            else if(this.computerRsp === "바위"){
                this.result = "비겼습니다"
            }else{
                this.result = "졌습니다"
            }
        }
        else if(this.userRsp === "보"){
            if(this.computerRsp === "가위"){
                this.result = "졌습니다"
            }
            else if(this.computerRsp === "바위"){
                this.result = "이겼습니다"
            }else{
                this.result = "비겼습니다"
            }
        }   
        
        const result :rspRequestDto= {
            "userRsp" : this.userRsp,
            "computerRsp" : this.computerRsp,
            "result" : this.result
        }

        return result
    }
}