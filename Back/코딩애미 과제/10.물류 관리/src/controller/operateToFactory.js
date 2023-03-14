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

        let messages = []
        if(orderVolume <= 4){ //주문이 4개 이하일 때
            messages.push(this.underFourOrderVolum(sectors, orderVolume, curTime)) 
        }else{ 
            messages.push(this.overFourOrderVolum(sectors, orderVolume, curTime))
        }

        // let messages = []
        // messages.push(this.underFourOrderVolum(sectors, orderVolume, curTime))

        // if(orderVolume > 4){
        //     messages.push(this.overFourOrderVolum(sectors, orderVolume, curTime))
        // }
        
        return messages
    }
    underFourOrderVolum(sectors, orderVolume, curTime){
        let messages =[]
        for(let i = 0; i < orderVolume; i++){
            const tmpMsg = sectors[i].factoryOperation(lists[i], curTime, i+1)
            messages.push(tmpMsg)
        }    
        return messages
    }
    overFourOrderVolum(sectors, orderVolume, curTime){
        console.log(lists)
        let messages = []
        let ProductTimes = [{sectorNumber : 0, productTime : 0},{sectorNumber : 1, productTime : 0},{sectorNumber : 2, productTime : 0},{sectorNumber : 3, productTime : 0}] //[섹터번호, 소모시간]
        let tmpProductTimes = []
        for(let i=0; i < orderVolume; i++){
            let num = i % 4
            let SectorNumber = ProductTimes[num].sectorNumber
            let tmpMsg = sectors[SectorNumber].factoryOperation(lists[i], curTime, SectorNumber+1)

            messages.push(tmpMsg)                
            
            let tmpProductTime = sectors[SectorNumber].getproductTime(lists[i])
            
            tmpProductTimes.push({sectorNumber : SectorNumber, productTime : tmpProductTime})    
            
            if(i != 0 && i % 3 === 0){
                tmpProductTimes = this.productTimeSort(tmpProductTimes)
                ProductTimes = tmpProductTimes
                tmpProductTimes = []
            }
        }

        return messages
    }
}


module.exports = operateToFactory