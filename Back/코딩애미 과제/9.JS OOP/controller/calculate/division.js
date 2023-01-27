const ArithmeticOperation = require("../../model/AnOperation")
const ZeroDividedError = require("../../helper/ZeroDividedError")

class Division extends  ArithmeticOperation{
    getOperator(){ 
        return this.getDivied()
    }
    calculateNumber(a,b){
        if(b === 0)
            return new ZeroDividedError().showError()
        return a / b
    }
}

module.exports = Division