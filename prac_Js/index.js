// let age = prompt("나이를 입력해주세요", 100); //입력칸 있음
// alert(`당신의 나이는 ${age}입니다.`)

//[1,2].forEach(alert)

// let text = confirm("당신은 주인인가요?"); //예 아니요 있음
// alert(test)

// let name = prompt("사용자의 이름은 무엇입니까?",'홍길동');
// alert(`사용자 이름 : ${name}`);

// console.log("-9" - 5) //-14
//console.log("-9" + 5) // -95

//alert( alert(1) || 2 || alert(3) );

// // ??연산자
// let firstName = null;
// let lastName = null;
// let nickName = "바이올렛";

// // null이나 undefined가 아닌 첫 번째 피연산자
// alert(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛


// function sayHi() {   // (1) 함수 생성
//     alert( "Hello" );
//   }
  
//   let func = sayHi;    // (2) 함수 복사
  
//   func(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행됩니다)!
//   sayHi(); // Hello    //     본래 함수도 정상적으로 실행됩니다.


// //매개변수가 3개인 함수
// function ask(question, yes, no){
//     if (confirm(question)) yes()
//     else no();
// }

// function showOK(){
//     alert("동의하셨습니다.");
// }

// function showCancel(){
//     alert("취소 버튼을 누르셨습니다.");
// }

// ask("동의하십니까???",showOK,showCancel);


//조건에 다른 함수 정의
// let age = prompt("나이를 알려주세요.", 18);

// let welcome;

// if (age < 18) { 
//       welcome = function() {
//         alert("안녕!");
//       };
    
//     } else {
    
//       welcome = function() {
//         alert("안녕하세요!");
//       };
    
//     }
    
//     welcome(); // 제대로 동작합니다.

// // ? 연산을 이용해 간단하게 나타낼 수 있다.
// let age = prompt("나이를 알려주세요", 18);

// let welcome = (age <18) ? 
//     function(){alert("안녕!");}:
//     function(){alert("안녕하세요!");};
// welcome(age);

// 에로우 함수
// let age = prompt("나이를 알려주세요",18);

// let welcome = (age <18) ?
//     ()=>{alert("안녕");}:
//     ()=>{alert("안녕하세요");};

// welcome();

// let ask = (question, yes, no)=>{
//     if(confirm(question)) yes();
//     else no();
// }

// ask(
//     "동의하십니까",
//     ()=>{alert("동의하셨습니다.");},
//     ()=>{alert("취소 버튼을 누르셨습니다.");}
//     );

// //객체
// let user={
//     name:  "john", 
//     age:30,
//     "likes birds" : true //이런 것도 가능
// };

// alert(user["likes birds"]);

// let user ={};

// //set
// user["likes birds"] = true;
// //get
// alert(user["likes birds"]);
// //delete
// delete user["likes birds"];


// // [] 연산 응용하기
// let user={
//     name:  "john", 
//     age:30,
//     isAdmin:true,
// };

// let key = prompt("사용자의 어떤 정보를 얻고 싶으신가요?", 'name');
//  //변수로 접근
// alert(user[key]);

// function makeUser(name,age){
//     return {
//         name, // name : name 과 같음
//         age,  // age : age 와 같음
//     };
// }

// let obj ={
//     test: undefined
// };

// alert(obj.test)
// alert('text' in obj)

// for(let key in user){
//     alert(key); //name, age isAdmin
//     alert(user[key])//john, 30, true
// }

// let user = { 
//     name :"john",
//     surname : "smith"
// };

// user.age = 25; //프로퍼티 하나 추가

// //정수 프로퍼티가 아닌 프로터리는 추가된 순서대로 나열된다.
// for(let prop in user){
//     alert(prop); // name, surname, age
// }

//-----------------------
//과제1
// let user={
//     name : "John",
//     surname: "Smith"
// }

// user["name"] = "Pete";
// alert(user["name"]);

// delete user.name;


//과제2
// function isEmpty(obj){
//     for(let o in obj){
//         return false;
//     }
//     return true;
// }

// let schedule={};
// alert(isEmpty(schedule)); // true
// schedule["8:30"] = "get up";
// alert(isEmpty(schedule)); // false;


//과제3
//const는 user의 겂을 고정하지만, 그 내용은 고정하지 않는다. 

// const user={
//     name: "john"
// };
// user.name='Pete';
// alert(user.name)

//과제4

// function isEmpty(obj){
//     for(let o in obj){
//         return false;
//     }
//     return true;
// };

// function add(objs){
//     let result = 0;
//     for(let obj in objs){
//         result += objs[obj];
//     }
//     return result;
// };

// let salaries={
//     John:100,
//     Ann:160,
//     Pete:130
// };

// let sum=0;
// if(!isEmpty(salaries)){ //값이 있을 때
//     sum = add(salaries);
// }
// alert(sum);

//과제 5
// function multiplyNumber(objs){
//     for(let obj in objs){
//         if(typeof objs[obj] == 'number'){
//             objs[obj] *=2;
//         }
//     }
// }

// let menu={
//     width:200,
//     heigth:300,
//     title: "my menu"
// };

// multiplyNumber(menu);

// for(let m in menu){
//     alert(menu[m]);
// }

// //Object.assign 을 사용하면 간단히 복제할 수 있다
// let user={
//     name: "John",
//     age:30
// };

// let clone = Object.assign({}, user); 
// //Obeject.assign 은 얕은 복사를 해준다.

//이럴 땐 어떡하죠?
let user ={
    name:"John",
    sizes:{
        height: 182,
        width: 50
    }
};

// alert(user.sizes.height); // 182 
//clone.size = user.sizes로 복사하는 것은 불가능
let clone = Object.assign({},user);
// 이렇게 하면 결국에는 sizes는 같이 공유를 하게 된다.

let clone1 = _.cloneDeep(user);
if(user.sizes === clone1.sizes){alert('같')}
else{alert('틀')}

