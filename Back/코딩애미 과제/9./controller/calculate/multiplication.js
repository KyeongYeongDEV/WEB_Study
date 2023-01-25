const ArithmeticOperation = require("../../model/AnOperation")

class Multiplication extends ArithmeticOperation{
    getOperator(){
        return this.getMultyply()
    }
    calculateNumber(a,b){
        return a * b
    }
}

module.exports = Multiplication