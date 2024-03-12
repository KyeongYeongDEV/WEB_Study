const lists = require("../model/productSchema")
const Sort = require("./sort") //기능 완성하면 지우기
const Sector = require("./sector")
const CreateSector = require("./createSector")

class operateToFactory extends Sort{   
    operateSector(curTime){
        this.listSort(lists)

        const orderVolume = lists.length
        const sectors = this.createSectorsAccordingToSize(orderVolume)
        let message = []
        
        if(this.isOrderVolumeOverFour(orderVolume)){
            message.push(this.overFourOrderVolume(sectors, orderVolume, curTime))
            return message
        }
        message.push(this.underFourOrderVolume(sectors, orderVolume, curTime))

        return message
    }
    createSectorsAccordingToSize(orderVolume){
        return orderVolume > 1 ? new CreateSector().createOtherSector(orderVolume) : new Sector()
    }
    isOrderVolumeOverFour(orderVolume){
        return orderVolume > 4 ? 1 : 0
    }
    underFourOrderVolume(sectors, orderVolume, curTime){
        let message =[]
        for(let i = 0; i < orderVolume; i++){
            const tmpMsg = sectors[i].factoryOperation(lists[i], curTime, i+1)
            message.push(tmpMsg)
        }    
        return message
    }
    overFourOrderVolume(sectors, orderVolume, curTime){
        let message = []
        let ProductTimes = [{sectorNumber : 0, productTime : 0},{sectorNumber : 1, productTime : 0},{sectorNumber : 2, productTime : 0},{sectorNumber : 3, productTime : 0}] //[섹터번호, 소모시간]
        let tmpProductTimes = []
        for(let i=0; i < orderVolume; i++){
            let num = i % 4
            let SectorNumber = ProductTimes[num].sectorNumber
            let tmpMsg = sectors[SectorNumber].factoryOperation(lists[i], curTime, SectorNumber+1)

            message.push(tmpMsg)                
            
            let tmpProductTime = sectors[SectorNumber].getproductTime(lists[i])
            
            tmpProductTimes.push({sectorNumber : SectorNumber, productTime : tmpProductTime})    
            
            if(this.checkIndexNotZeroAndMultiplyThree(i)){
                tmpProductTimes = this.productTimeSort(tmpProductTimes)
                ProductTimes = tmpProductTimes
                tmpProductTimes = []
            }
        }

        return message
    }
    checkIndexNotZeroAndMultiplyThree(index){
        if(index != 0 && index % 3 === 0) return 1
        return 0
    }
}


module.exports = operateToFactory