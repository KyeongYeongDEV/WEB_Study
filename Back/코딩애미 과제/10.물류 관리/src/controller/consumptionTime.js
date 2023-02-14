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

const DivideQuantity = require("./DivideQuantity")

class ConsumtionTime extends DivideQuantity{    
    operateSector(){  //위에서 리스트 형식으로 바꾸면 for로 해보기
        const dividedQuantityList = this.divideQuantity(list)

        var result = 0
        for(var i = 0; i < 4; i++){
            result += Sectors[i].factoryOperation(dividedQuantityList[i])
        }
        
        return result
    }    
}

module.exports = ConsumtionTime