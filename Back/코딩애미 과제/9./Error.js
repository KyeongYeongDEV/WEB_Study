class Error{
    constructor(msg){
        this.msg = ""
    }
    showErrorMessage(msg){
        this.msg = msg
        return this.msg
    }
    ZeroDiviedError(){
        this.msg = '0으로 나눌 수 없습니다.'
        return this.msg
    }
    NullOperatorError(){
        this.msg = '연산자를 초기화하십시오'
        return this.msg
    }
    OverrideFunctionError(){
        this.msg = "함수를 오버라이딩한 후 사용하세요"
        return this.msg
    }
}

module.exports  = Error