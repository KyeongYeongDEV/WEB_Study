const lists = require("../model/productSchema")
const Sort = require("./sort") //기능 완성하면 지우기
const Sector = require("./sector")
const CreateSector = require("./createSector")

class operateToFactory extends Sort{   
    operateSector(curTime){
        this.listSort(lists)

        const orderVolume = lists.length
        
        let sectors = this.createSctorsAccordingToSize(orderVolume)

        let messages = []
        if(this.checkOrderVolumOverFour(orderVolume)){
            messages.push(this.overFourOrderVolum(sectors, orderVolume, curTime))
            return messages
        }
        messages.push(this.underFourOrderVolum(sectors, orderVolume, curTime))

        return messages
    }
    createSctorsAccordingToSize(orderVolume){
        if(orderVolume > 1) {
            const sectors = new CreateSector().createOtherSector(orderVolume)
            return sectors
        }

        return new Sector()
    }
    checkOrderVolumOverFour(orderVolume){
        return orderVolume > 4 ? 1 : 0
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
            
            if(this.checkIndexNotZeroAndMultiplyThree(i)){
                tmpProductTimes = this.productTimeSort(tmpProductTimes)
                ProductTimes = tmpProductTimes
                tmpProductTimes = []
            }
        }

        return messages
    }
    checkIndexNotZeroAndMultiplyThree(index){
        if(index != 0 && index % 3 === 0) return 1
        return 0
    }
}


module.exports = operateToFactory