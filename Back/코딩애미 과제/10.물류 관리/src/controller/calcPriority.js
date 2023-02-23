const Sort = require("./sort")


class CalcPriority extends Sort{
    constructor(list){
        super(list)
        this.list  = this.startSort(list)

    }
    getFirstQuantity(){        
        return this.list[0].quantity
    }
    getFirstDeadline(){
        return this.list[0].deadline
    }
}

module.exports = CalcPriority