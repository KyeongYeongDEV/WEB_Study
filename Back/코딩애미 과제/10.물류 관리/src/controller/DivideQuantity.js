const CalcPriority = require("./calcPriority")

class DivideQuantity extends CalcPriority{
    divideQuantity(list){
        const firstQuantity = this.getFirst(list) //젤 먼저 만들어야 하는 걸 가져옴

        //수량을 4로 나누고 남는 건 첫 번째 섹터에 할당
        const result =parseInt(firstQuantity / 4)
        const remainder = firstQuantity % 4 
        //나머지 물량 나누는 거 생각
    
        const quantityList = [result + remainder, result, result, result]

        return quantityList
    }
}

module.exports = DivideQuantity