const ArithmeticOperation = require("../../model/ArithmemticOperation")

class Addition extends ArithmeticOperation{
    getOperator(){
        return this.getPlus()
    }
    calculateNumber(a, b){
        return a + b
    }
}

module.exports = Addition