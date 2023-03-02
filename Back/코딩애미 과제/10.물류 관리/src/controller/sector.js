const CheckOverDeadline  = require("./checkOverDeadline")
const CompareType = require("./compareType")
const compareType = new CompareType()


class Sector{    
    factoryOperation(list, curTime,secterNum){
        const min= this.getproductTime(list)
        const information = this.getSectorInformation(list, min, curTime, secterNum)

        return information   
    }
    getproductTime (list){ //분단위 계산
        compareType.setPreviousType(list.type)
        const productTime = list.quantity * 180
        
        const delay = list.quantity * 10
        if(compareType.typeToChanged(list.type)){
            delay += 20
        }
    
        const min = Math.round((productTime + delay)/60) //생산시간  + 딜레이 = 총 생산 시간

        return min
    }

    getSectorInformation(list, min, curTime, secterNum){
        const spandTimeMsg = new CheckOverDeadline(min, list.deadline, curTime).calculate()
        const msg = `\n\n${secterNum}번째 섹터 정보\n이름: ${list.name}\ntype: ${list.type}\n물량: ${list.quantity}개\n마감일: ${list.deadline}\n` 
        return  msg + spandTimeMsg
    }
}

module.exports = Sector