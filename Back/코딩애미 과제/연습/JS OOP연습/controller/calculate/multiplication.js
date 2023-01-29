const Arithmetic  = require("../../model/Arithmetic")

class Multiplication{
    getOperater(){
        return new Arithmetic().getMultyply()
    }
    calculateNum(a, b){
        return a * b
    }
}

module.exports = Multiplication