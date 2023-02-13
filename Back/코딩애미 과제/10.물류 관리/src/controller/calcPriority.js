const Sort = require("./sort")


class CalcPriority extends Sort{
    getFirst(list){
        this.startSort(list)
        return list[0]
    }
}

module.exports = CalcPriority