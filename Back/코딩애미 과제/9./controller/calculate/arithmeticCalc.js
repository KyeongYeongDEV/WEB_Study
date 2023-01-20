const Error = require("../../Error")

class ArithmeticCalc{  //추상 클래스
    constructor(operator){
        this.operator = operator
    }

    getOperator(){ //꼭 오버라이딩을 해야 사용할 수 있게 함
        throw new Error().NullOperatorError()
    }
    calculateNumber(a,b){
        throw new Error().OverrideFunctionError()
    }
}

module.exports = ArithmeticCalc