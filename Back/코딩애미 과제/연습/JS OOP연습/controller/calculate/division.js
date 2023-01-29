const Arithmetic  = require("../../model/Arithmetic")
const ZeroDividedError = require("../../helper/zeroDividedError")


class Division extends ZeroDividedError{
    getOperater(){
        return new Arithmetic().getDivide()
    }
    calculateNum(a, b){
        if(b === 0){
            return this.showError()
        }
        return a / b
    }
}

module.exports = Division