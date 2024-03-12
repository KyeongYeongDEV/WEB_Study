const Arithmetic  = require("../../model/Arithmetic")

class Subtraction{
    getOperater(){
        return new Arithmetic().getMinus()
    }
    calculateNum(a, b){
        return a - b
    }
}

module.exports = Subtraction