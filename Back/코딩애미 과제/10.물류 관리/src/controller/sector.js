const SecToMin = require("./secToMin")

class Sector extends SecToMin{
    factoryOperation(quantity){
        return this.secToMin((quantity * 180) + (quantity * 10)) //생산시간  + 딜레이
    }
}

module.exports = Sector