class Error{
    constructor(msg){
        this.msg = msg
    }
    showError(){
        return this.msg
    }
}

module.exports = Error