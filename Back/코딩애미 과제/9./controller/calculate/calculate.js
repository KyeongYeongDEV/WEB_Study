const Addition = require("./addition")
const Subtraction = require("./subtraction")
const Multiplication = require("./multiplication")
const Divition = require("./division")
const Arithmetic = require("../../model/enum")


const addition  = new Addition();
const subtraction = new Subtraction()
const multiplication = new Multiplication()
const divition = new Divition()
const arithmetic  = new Arithmetic();



class Calculate{
    calculateNumber(a, b, delimiter){
        switch(delimiter){
            case arithmetic.getPlus():
                return addition.numberOfAddition(a,b)
            case arithmetic.getMinus():
                return subtraction.numberOfSubtraction(a,b)
            case arithmetic.getMultyply():
                return multiplication.numberOfMultiplication(a,b)
            case arithmetic.getDivied():
                return divition.numberOfDivision(a,b)
        }
    }
}

module.exports = Calculate