const express = require("express");
const app = express();

const server = app.listen(3001, ()=>{
    console.log("Start Server");
});

app.get('/api/users/:type',async(req,res)=>{//':type' = 여기에는 어떤 값이든 들어올 수 있다.
    let {
        type
    } = req.params; //콜론 패스에 들어오는 값을 파라미터로 받을 수 있다.

    console.log(type) 
    if(type == 'seoul'){
        let data=[
            {name: "홍길동",city:'seoul'},
            {name: "김철수",city:'seoul'},    
        ];
        res.send(data);
    }else if(type === 'jeju'){
        let data=[
            {name: "박지성",city :"jeju"},
            {name: "손흥민",city :"jeju"},
        ]
        res.send(data);
    }else{
        res.send('Type is not correct.');
    }
    res.send(`ok`);
});