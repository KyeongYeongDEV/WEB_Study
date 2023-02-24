const SecToMin = require("./secToMin")

class Sector extends SecToMin{
    factoryOperation(quantity){
        const delay = quantity * 10
        const productTime = quantity * 180
        const min = this.secToMin(productTime + delay) //생산시간  + 딜레이

        return min
    }
}

module.exports = Sector