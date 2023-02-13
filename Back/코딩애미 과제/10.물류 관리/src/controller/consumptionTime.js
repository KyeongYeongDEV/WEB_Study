//소모시간 계산
//섹터당 하나당 5개 생산 가능
//하나 뽑는 데 평균 3분 소모
const list = require("../model/productSchema")
const Sector = require("./sector")
const Sectors = [
    new Sector(),
    new Sector(),
    new Sector(),
    new Sector()
]

const CalcPriority = require("./calcPriority")
const calcPriority = new CalcPriority()



class ConsumtionTime{
    divideQuantity(){
        const quantity =calcPriority.getFirst(list)

        //수량을 4로 나누고 남는 건 첫 번째 섹터에 할당
        let result =parseInt(quantity / 4)
        let remainder = quantity % 4 

        return [result + remainder, result, result, result]
    }

    operateSector(){  //위에서 리스트 형식으로 바꾸면 for로 해보기
        const dividedQuantityList = this.divideQuantity()

        let result =0

        array.forEach(element => {
            result += Sectors[i].factoryOperation(dividedQuantityList[i])
        });
        
        return result
    }    


    calcConsumtionTime(){
        
        
        
    }

}

module.exports = ConsumtionTime