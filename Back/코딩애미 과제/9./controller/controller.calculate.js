const Addition = require("../controller/controller.addition")
const Subtraction = require("../controller/controller.subtraction")
const Multiplication = require("../controller/controller.multiplication")
const Divition = require("../controller/controller.division")

const addition  = new Addition();
const subtraction = new Subtraction()
const multiplication = new Multiplication()
const divition = new Divition()

class Calculate{
    calculateNumber(a, b, delimiter){
        switch(delimiter){
            case '+':
                return addition.numberOfAddition(a,b)
            case '-':
                return subtraction.numberOfSubtraction(a,b)
            case '*':
                return multiplication.numberOfMultiplication(a,b)
            case '/':
                return divition.numberOfDivision(a,b)
        }
    }
}

module.exports = Calculate