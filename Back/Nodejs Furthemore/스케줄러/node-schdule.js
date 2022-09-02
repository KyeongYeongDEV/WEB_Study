const schedule = require("node-schedule");
let scheduleObj = null;

const set = (s)=>{
    let rule = new schedule.RecurrenceRule(); //반복된다.
    //rule.dayOfWeek = [4,5]; //목요일, 금요일  //일요일(0)부터 시작 토욜(6)
    rule.dayOfWeek = s.dayOfWeek
    rule.hour = s.hour;
    rule.minute = s.minute;

    let job = schedule.scheduleJob(rule, function(){
     console.log('Schduler has excuted!');
    });
    scheduleObj = job;
};

const cancel = () =>{
    if(scheduleObj != null){
        scheduleJob.cancel();
    }
};

const setScheduler = (s)=>{
    cancel();
    set(s);
}

const scheduleData ={
    dayOfWeek: [4,5],
    hour : 17,
    minute: 33,
};


setScheduler(scheduleData);