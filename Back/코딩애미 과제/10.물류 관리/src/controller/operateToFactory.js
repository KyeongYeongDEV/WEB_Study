const lists = require("../model/productSchema")
const Sort = require("./sort") //기능 완성하면 지우기
const Sector = require("./sector")
const CreateSector = require("./createSector")

class operateToFactory extends Sort{  
    operateSector(curTime){
        const orderVolume = lists.length
        
        let sectors = new Sector()
        if(orderVolume > 1) {
            this.listSort(lists)
            sectors = new CreateSector().createOtherSector(orderVolume)
        }

        let msgList=[]
        if(orderVolume <= 4){ //주문이 4개 이하일 때
            for(let i = 0; i < orderVolume; i++){
                const tmpMsg = sectors[i].factoryOperation(lists[i], curTime, i+1)
                msgList.push(tmpMsg)
            }    
        }else{ 
            let ProdectTimeList = [{sectorNumber : 0, productTime : 0},{sectorNumber : 1, productTime : 0},{sectorNumber : 2, productTime : 0},{sectorNumber : 3, productTime : 0}] //[섹터번호, 소모시간]
            let tmpProductTimeList = []
            for(let i=0; i < orderVolume; i++){
                let num = i % 4
                let SectorNumber = ProdectTimeList[num].sectorNumber
                let tmpMsg = sectors[SectorNumber].factoryOperation(lists[i], curTime, SectorNumber+1)

                msgList.push(tmpMsg)                
                
                let tmpMin = sectors[SectorNumber].getproductTime(lists[i])
                
                tmpProductTimeList.push({sectorNumber : SectorNumber, productTime : tmpMin})    
                
                if(i != 0 && i % 3 === 0){
                    tmpProductTimeList = this.productTimeSort(tmpProductTimeList)
                    ProdectTimeList = tmpProductTimeList
                    tmpProductTimeList = []
                }
            }
        }
        
        return msgList
    }
}


module.exports = operateToFactory