class CheckOverDeadline{
    constructor(Min, deadline){
        this.Min = Min
        this.deadline = deadline
        this.curTime = 20230205
    }
    calculate(){
        const hour = Math.round(this.Min / 60)
        const min = this.Min % 60
        const availableTime = (this.deadline - this.curTime) * 24 * 60

        
        let check = false
        let overTime =0
        if(availableTime < this.Min){
            overTime = this.Min - availableTime
            check = true
        }
        const overHour = Math.round(overTime / 60)
        const overMin  = overTime % 60

        let showSpendTime = `소모시간 : ${hour}시간 ${min}분` 
        if(check){
            showSpendTime += `\n마감일 초과!! \n추가필요시간 :  ${overHour}시간 ${overMin}`
        }

        return showSpendTime
    }
}

module.exports = CheckOverDeadline