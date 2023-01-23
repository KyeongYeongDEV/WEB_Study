const ArithmeticCalc = require("./arithmeticCalc")
const Arithmetic = require("../../model/enum")
const arithmetic = new Arithmetic()

class Addition extends ArithmeticCalc{
    getOperator(){
        return arithmetic.getPlus()
    }
    calculateNumber(a, b){
        return a + b
    }
}

module.exports = Addition