const Arithmetic = require("./resultOfCalculate")

class Calculate extends Arithmetic{
    calculateNumber(a, b, delimiter){
        return this.found(a, b, delimiter);
    }
}

module.exports = Calculate