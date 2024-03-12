const FindArithmeticOperation = require("./findArithmeticOperation")

class Calculate extends FindArithmeticOperation{
    calculateNumber(a, b, operator){
        return this.resultOfCalculate(a, b, operator)
    }
}

module.exports = Calculate