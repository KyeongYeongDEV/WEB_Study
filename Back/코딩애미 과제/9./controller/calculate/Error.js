class Error{
    constructor(){
        this.msg = ""
    }
    ZeroDivied(){
        this.msg = '0으로 나눌 수 없습니다.'
        return this.msg
    }
}

module.exports  = Error