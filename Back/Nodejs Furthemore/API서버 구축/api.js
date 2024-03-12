const express = require("express");
const app = express();
const uuidAPIkey = require("uuid-apikey");

const server = app.listen(3001, ()=>{
    console.log("Start Server");
});

console.log(uuidAPIkey.create());

const key = {
    apiKey: 'Z61MBFZ-WFSMHBG-P0P281G-6X6XMYQ',
    uuid: 'f98345bf-e3f3-48ae-b02c-2406374dda7a'
};

app.get('/api/users/:apikey/:type',async(req,res)=>{//':type' = 여기에는 어떤 값이든 들어올 수 있다.
    let {
        apikey,
        type
    } = req.params; //콜론 패스에 들어오는 값을 파라미터로 받을 수 있다.

    if(!uuidAPIKey.isAPIkey() || !uuidAPIkey.check(apikey, key.uuid )){
        res.send('apiket is not valid');
    }else{
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
    }

    
});


app.get('/api/sales/:apikey/:year',async(req,res)=>{
    let {
        apikey,
        year
    } = req.params; 

    console.log(year) 
    if(year == '2019'){
        let data=[
            {product: "반도체",amount:'234555'},
            {product: "냉장고",amount:'9374'},
            
        ];
        res.send(data);
    }else if(year === '2020'){
        let data=[
            {product: "반도체",amount:'1115'},
            {product: "냉장고",amount:'99774'},
        ]
        res.send(data);
    }else{
        res.send('year is not correct.');
    }
    res.send(`ok`);
});


/*
refo:
https://www.youtube.com/watch?v=8XpVJaEWesM&list=PLqbWuGdVBJd0oHdwp9y9NsTTQbUuEPNyY&index=4
*/