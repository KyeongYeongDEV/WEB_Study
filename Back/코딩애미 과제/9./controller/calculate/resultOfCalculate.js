const Addition = require("./addition")
const Subtraction = require("./subtraction")
const Multiplication = require("./multiplication")
const Divition = require("./division")

const Found = [
    new Addition(), 
    new Subtraction(),
    new Multiplication(),
    new Divition()
]

class Arithmetic{ 
    found(a,b, delimiter){
        const f = Found.find(Element => Element.getOperator() === delimiter)
        return f.calculateNumber(a,b)

    }
}

module.exports = Arithmetic