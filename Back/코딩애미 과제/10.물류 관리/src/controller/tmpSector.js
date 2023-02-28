const CheckOverDeadline  = require("./checkOverDeadline")
const Sort = require("./sort")
const CompareType = require("./compareType")
const compareType = new CompareType()


class Sector extends Sort{
    constructor(list, curTime, delay, secterNumber){
        this.list = list
        this.curTime = curTime
        this.typeChangedDelay = delay
        this.sectorNumber = secterNumber
    }
    tmpfunc(lists, curTime){
        const orderVolume = lists.length 

        if(orderVolume == 1){
            const msg = this.factoryOperation(lists,curTime,lists.length)
            return msg
        }
        else {
            this.startSort(lists)


            let addSectorSize = orderVolume
            if(orderVolume > 4){
                addSectorSize = 4
            }

            let Sectors=[]
            for(let i = 2; i <= addSectorSize; i++){
                Sectors.push(new Sector(this.list[i-1], this.curTime, this.delay, i))
            }
        
        }

    }
    factoryOperation(){
        compareType.setPreviousType(this.list.type)
        const productTime = this.list.quantity * 180
        
        const totalDelay = this.list.quantity * 10
        if(compareType.typeToChanged(this.list.type)){
            totalDelay += this.typeChangedDelay
        }
    
        const min = Math.round((productTime + totalDelay)/60) //생산시간  + 딜레이 = 총 생산 시간
        
        
        const spandTimeMsg = new CheckOverDeadline(min, this.list.deadline, this.curTime).calculate()
        const msg = `\n\n${this.sectorNumber}번째 섹터 정보\n이름: ${this.list.name}\ntype: ${this.list.type}\n물량: ${this.list.quantity}개\n마감일: ${this.list.deadline}\n` 
        return  msg + spandTimeMsg
    }
}

module.exports = Sector