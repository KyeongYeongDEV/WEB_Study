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

//객체
let user={
    name:  "john", 
    age:30,
    "likes birds" : true //이런 것도 가능
};

alert(user["likes birds"]);
