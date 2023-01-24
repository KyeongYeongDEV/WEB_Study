const ArithmeticOperation = require("../../model/ArithmemticOperation")

class Multiplication extends ArithmeticOperation{
    getOperator(){
        return this.getMultyply()
    }
    calculateNumber(a,b){
        return a * b
    }
}

module.exports = Multiplication