const Error = require("./Error")

class ZeroDividedError extends Error{
    constructor(){
        super("0으로 나눌 수 없습니다.")
    }
}

module.exports = ZeroDividedError