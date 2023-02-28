const CheckOverDeadline  = require("./checkOverDeadline")
const Sort = require("./sort")
const CompareType = require("./compareType")
const compareType = new CompareType()


class Sector extends Sort{
    factoryOperation(list, curTime,num){
        compareType.setPreviousType(list.type)
        const productTime = list.quantity * 180
        
        const delay = list.quantity * 10
        if(compareType.typeToChanged(list.type)){
            delay += 20
        }
    
        const min = Math.round((productTime + delay)/60) //생산시간  + 딜레이 = 총 생산 시간
        
        
        const spandTimeMsg = new CheckOverDeadline(min, list.deadline, curTime).calculate()
        const msg = `\n\n${num}번째 섹터 정보\n이름: ${list.name}\ntype: ${list.type}\n물량: ${list.quantity}개\n마감일: ${list.deadline}\n` 
        return  msg + spandTimeMsg
    }
}

module.exports = Sector