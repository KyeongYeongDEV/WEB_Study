const CheckOverDeadline  = require("./checkOverDeadline")
const Sort = require("./sort")
const CompareType = require("./compareType")
const compareType = new CompareType()

const createSector = require("./createSector")


class tmpSector extends Sort{
    constructor(list, curTime, delay, secterNumber){
        this.list = list
        this.curTime = curTime
        this.typeChangedDelay = delay
        this.sectorNumber = secterNumber
    }

    tmpfunc(){
        //ToDo: 
        const orderVolume = lists.length 
        let msg = []
        const tmpMsg = this.factoryOperation(this.list,this.curTime,lists.length)

        msg.push(tmpMsg)
        
        if(orderVolume > 1){
            this.startSort(lists)

            

            let Sectors=[]
            for(let i = 2; i <= addSectorSize; i++){//섹터 생성 및 가동
                Sectors.push(new Sector(this.list[i-1], this.curTime, this.delay, i))
                msg.push(Sectors[i-1].factoryOperation())
            }
            
            return msg
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

module.exports =tmpSector