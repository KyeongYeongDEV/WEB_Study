class CheckOverDeadline{
    constructor(Min, deadline, curTime){
        this.Min = Min
        this.deadline = deadline
        this.curTime =  curTime //임시 현재 날짜
    }
    calculate(){
        const hour = Math.round(this.Min / 60)
        const min = this.Min % 60 
        const availableTime = (this.deadline - this.curTime) * 24 * 60 //초과한 시간 분단위로 계산
        
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