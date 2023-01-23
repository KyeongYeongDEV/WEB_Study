const Error = require("../../Error")

class ArithmeticCalc extends Error{  //추상 클래스

    getOperator(){ //꼭 오버라이딩을 해야 사용할 수 있게 함
        return this.operator
    }
    calculateNumber(a,b){

    }
}

module.exports = ArithmeticCalc