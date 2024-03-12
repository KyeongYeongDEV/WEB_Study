// const readline = require("readline");

// const rl = readline.createInterface({
//     input:process.stdin,
//     output: process.stdout
// });

// rl.question("What is your name?", (answer)=>{
//     console.log(`Hello ${answer}`);

//     rl.close();
// });

//------------------------------------
const fs = require('fs');

// fs.writeFileSync('./hello.txt', 'Hello DEV');

// const data = fs.readFileSync('./hello.txt',{encoding:"utf-8"});
// console.log(data);

// fs.appendFileSync("./hello.txt","\nWelcome!");

// const list = fs.readdirSync('.');
// console.log(list);

let startTime = Date.now();

let text = 'default';
setTimeout(()=>{
    console.log(Date.now()- startTime,"first");
}, 5000); //여기서 5000은 5초라는 뜻임

console.log(Date.now() - startTime,"Second");
