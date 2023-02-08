const Compare = require("./compare")

//물량 기준 정렬
class SortOfQuantity extends Compare{
    sortOfQuantity(list){
        return list.sort(this.compareOfQuantity(a,b))
    }
}

module.exports = SortOfQuantity