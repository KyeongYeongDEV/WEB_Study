const Compare = require("./compare")

//마감일 정렬
class SortofDeadline extends Compare{
    sortOfDeadline(list){
        return list.sort(this.sortOfDeadline(a,b))
    }
}

module.exports = SortofDeadline