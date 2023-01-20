const Arithmetic  = require("./arithmeticCalc")

class Subtraction extends Arithmetic{
    constructor(){
        super('-')
    }
    getOperator(){ //꼭 오버라이딩을 해야 사용할 수 있게 함
        return this.operator
    }
    calculateNumber(a,b){
        return a - b
    }

}

module.exports = Subtraction