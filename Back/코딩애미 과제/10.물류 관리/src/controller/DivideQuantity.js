const CalcPriority = require("./calcPriority")

class DivideQuantity{
    divideQuantity(list){
        const calcPriority = new CalcPriority(list)

        const firstQuantity = calcPriority.getFirstQuantity()
        const deadline = calcPriority.getFirstDeadline()
        
        const result =parseInt(firstQuantity / 4)
        const remainder = firstQuantity % 4 
        const quantityList = [result , result, result, result, deadline]

        switch(remainder){ // 나중에 바꿔보기
            case 1:
                quantityList[0]++
                break
            case 2:
                quantityList[0]++
                quantityList[1]++
                break
            case 3:
                quantityList[0]++
                quantityList[1]++
                quantityList[2]++
                break
            default:
                break
        }

        return quantityList
    }
}

module.exports = DivideQuantity