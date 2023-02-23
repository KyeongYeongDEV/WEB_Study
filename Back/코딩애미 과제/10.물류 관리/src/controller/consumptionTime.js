//소모시간 계산
//섹터당 하나당 5개 생산 가능
//하나 뽑는 데 평균 3분 소모
const list = require("../model/productSchema")
const DivideQuantity = require("./DivideQuantity")
const CheckOverDeadline  = require("./checkOverDeadline")


const Sector = require("./sector")
const Sectors = [
    new Sector(),
    new Sector(),
    new Sector(),
    new Sector()
]


class ConsumtionTime extends DivideQuantity{    
    // constructor(list){
    //     this.list = list
    // }
    operateSector(){
        const dividedQuantityList = this.divideQuantity(list)
        const size= 4
        const deadline = dividedQuantityList[size] 

        let result = 0
        for(let i = 0; i < 4; i++){ //반복문 다른 걸 써보기
            result += Sectors[i].factoryOperation(dividedQuantityList[i])
        }
        //for( element in ) //
        //for(element of) //객체순회
        //forEach
        
        result = Math.round(result)

        const spandTime = new CheckOverDeadline(result, deadline).calculate()

        return spandTime
    }    
}

module.exports = ConsumtionTime