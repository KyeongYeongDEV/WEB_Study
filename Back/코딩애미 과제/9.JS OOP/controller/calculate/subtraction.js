const ArithmeticOperation = require("../../model/AnOperation")

class Subtraction extends ArithmeticOperation{
    getOperator(){ //꼭 오버라이딩을 해야 사용할 수 있게 함
        return this.getMinus()
    }
    calculateNumber(a,b){
        return a - b
    }

}

module.exports = Subtraction