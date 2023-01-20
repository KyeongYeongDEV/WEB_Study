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



const map = {
    PLUS : new Addition(),
    MINUS : new Subtraction(),
    MULTYPLY: new Multiplication(),
    DIVIED : new Divition()
}

class Calculate{
    calculateNumber(a, b, delimiter){
        switch(delimiter){
            case arithmetic.getPlus():
                return map.PULS.calculateNumber(a,b)
            case arithmetic.getMinus():
                return subtraction.calculateNumber(a,b)
            case arithmetic.getMultyply():
                return multiplication.calculateNumber(a,b)
            case arithmetic.getDivied():
                return divition.calculateNumber(a,b)
        }
    }
}

module.exports = Calculate