const Addition = require("./addition")
const Multiplication = require("./multiplication")
const Subtraction = require("./subtraction")
const Division = require("./division")

const ArithmeticOperation = [
    new Addition(),
    new Subtraction(),
    new Multiplication(),
    new Division()
]

class findArithmeticOperation{
    resultOfCalculate(a, b, operation){
        const result = ArithmeticOperation.find(element => element.getOperater() === operation)
        return result.calculateNum(a,b)
    }
}

module.exports = findArithmeticOperation