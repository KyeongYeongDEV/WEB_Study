const Arithmetic  = require("../../model/Arithmetic")

class Addition{
    getOperater(){
        return new Arithmetic().getPlus()
    }
    calculateNum(a, b){
        return a + b
    }
}

module.exports = Addition