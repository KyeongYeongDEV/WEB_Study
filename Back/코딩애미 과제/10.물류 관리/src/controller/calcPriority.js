const sortOfDeadline = require("./sort/sortOfDeadline")
const sortOfQuantity = require("./sort/sortOfQuantity")

class CalcPriority{
    constructor(list){
        this.list = list
    }

    pariority(){
        new sortOfDeadline().sortOfDeadline(this.list)
        new sortOfQuantity().sortOfQuantity(this.list)
    }
    getFirst(){
        return this.list[0]
    }
}

module.exports = CalcPriority