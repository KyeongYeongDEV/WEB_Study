const ArithmeticCalc = require("./arithmeticCalc")

class Addition extends ArithmeticCalc{
    constructor(){
        super('+')
    }
    getOperator(){
        return this.operator
    }
    calculateNumber(a, b){
        return a+b
    }
}

module.exports = Addition