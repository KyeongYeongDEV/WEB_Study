const Addition = require("./addition")
const Subtraction = require("./subtraction")
const Multiplication = require("./multiplication")
const Divition = require("./division")

const operatoer = [
    new Addition(), 
    new Subtraction(),
    new Multiplication(),
    new Divition()
]

class Arithmetic{ 
    found(a,b, delimiter){
        const result = operatoer.find(Element => Element.getOperator() === delimiter)
        return result.calculateNumber(a,b)

    }
}

module.exports = Arithmetic