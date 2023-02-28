const lists = require("../model/productSchema")
const Sort = require("./sort") //기능 완성하면 지우기
const Sector = require("./sector")

const Sectors = [
    new Sector(),
    new Sector(),
    new Sector(),
    new Sector()
]

class operateToFactory extends Sort{    
    operateSector(curTime){
        this.startSort(lists)
        const size= lists.length

        let msgList=[]
        for(let i = 0; i < size; i++){
            let sectorSequence = i % 4
            const tmpMsg = Sectors[sectorSequence].factoryOperation(lists[i], curTime, sectorSequence+1)
            msgList.push(tmpMsg)
        }       

        return msgList
    }    

    tmpfunction(curTime){
        const sector = new Sector()
        sector.tmpfunc(lists, curTime,10) //딜레이 기본 10초
    }
}

module.exports = operateToFactory