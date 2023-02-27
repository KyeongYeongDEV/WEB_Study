const list = require("../model/productSchema")
const Sort = require("./sort")


const Sector = require("./sector")
const Sectors = [
    new Sector(),
    new Sector(),
    new Sector(),
    new Sector()
]

class operateToFactory extends Sort{    
    operateSector(curTime){
        this.startSort(list)
        const size= list.length

        let msgList=[]
        for(let i = 0; i < size; i++){ //반복문 다른 걸 써보기
            let sectorSequence = i % 4
            console.log(sectorSequence)
            const tmpMsg = Sectors[sectorSequence].factoryOperation(list[i], curTime, sectorSequence+1)
            msgList.push(tmpMsg)
        }

        return msgList
    }    
}

module.exports = operateToFactory