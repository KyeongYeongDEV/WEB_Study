//소모시간 계산
//섹터당 하나당 5개 생산 가능
//하나 뽑는 데 평균 3분 소모
const list = require("../model/productSchema ")
const Sector = require("./sector")

const CalcPriority = require("./calcPriority")
const calcPriority = new CalcPriority(list)
calcPriority.pariority()

class ConsumtionTime{
    constructor(){
        this.first = calcPriority.getFirst()
        this.sector1 = new Sector()
        this.sector2 = new Sector()
        this.sector3 = new Sector()
        this.sector4 = new Sector()
    }

    divideQuantity(){
        const quantity = this.first.quantity

        let result =parseInt(quantity / 4)
        let remainder = quantity % 4 

        return [result + remainder, result, result, result]
    }

    operateSector(){
        const dividedQuantityList = this.divideQuantity()
        let result = this.sector1.factoryOperation(dividedQuantityList[0])
        result += this.sector2.factoryOperation(dividedQuantityList[1])
        result += this.sector3.factoryOperation(dividedQuantityList[2])
        result += this.sector4.factoryOperation(dividedQuantityList[3])
        
        return result
    }    


    calcConsumtionTime(){
        
        
        
    }

}

module.exports = ConsumtionTime