const Addition = require("./addition")
const Subtraction = require("./subtraction")
const Multiplication = require("./multiplication")
const Divition = require("./division")
const Arithmetic = require("../../model/enum")

const arithmetic  = new Arithmetic();

const calculateList = {
    PLUS : new Addition(), 
    MINUS : new Subtraction(),
    MULTYPLY: new Multiplication(),
    DIVIED : new Divition()
}

class Calculate{
    calculateNumber(a, b, delimiter){
        switch(delimiter){
            case arithmetic.getPlus():
                return calculateList.PLUS.calculateNumber(a,b)
            case arithmetic.getMinus():
                return calculateList.MINUS.calculateNumber(a,b)
            case arithmetic.getMultyply():
                return calculateList.MULTYPLY.calculateNumber(a,b)
            case arithmetic.getDivied():
                return calculateList.DIVIED.calculateNumber(a,b)
        }
    }
}

module.exports = Calculate