//npm i node-schedule
const schedule = require("node-schedule");
let scheduleObj = null;

const set = (s)=>{// 신규로 스케줄을 추가해주는 역할
    let rule = new schedule.RecurrenceRule(); //반복된다.
    rule.dayOfWeek = s.dayOfWeek
    rule.hour = s.hour;
    rule.minute = s.minute;

    let job = schedule.scheduleJob(rule, function(){
     console.log('Schduler has excuted!');
    });
    scheduleObj = job;
};

const cancel = () =>{// 기존에 있던 스케줄을 없애주는 역할
    if(scheduleObj != null){
        scheduleJob.cancel();
    }
};

const setScheduler = (s)=>{
    cancel()
    set(s);
};

const scheduleData ={ //요일과 시간 지정
    dayOfWeek: [4,5],//목요일, 금요일  //일요일(0)부터 시작 토욜(6)
    hour : 17,
    minute: 33,
};


setScheduler(scheduleData);