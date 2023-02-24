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
        let printList=[]
        for(let i = 0; i < size; i++){ //반복문 다른 걸 써보기
            let tmp = Math.round(Sectors[i].factoryOperation(dividedQuantityList[i]))
            let print = `${i+1}번 섹터\n물량: ${dividedQuantityList[i]}개 소모시간: ${tmp/60}시간\n`
            printList.push(print)
            result += tmp
        }

        const spandTime = new CheckOverDeadline(result, deadline).calculate()             
        printList.push(spandTime)

        return printList
    }    
}

module.exports = ConsumtionTime