const ArithmeticOperation = require("../../model/AnOperation")

class Addition extends ArithmeticOperation{
    getOperator(){
        return this.getPlus()
    }
    calculateNumber(a, b){
        return a + b
    }
}

module.exports = Addition