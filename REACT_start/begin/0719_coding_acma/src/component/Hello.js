import { useState } from "react";
import UserName from './UserName'

export default function Hello(props){
function showName(){
   console.log('Mike');
} 
const [name,setName] = useState('mike'); //() 안은 초기값
const [age,setAge] = useState(props.age); // props 즉, 넘겨받은 값은 바꾸면 안 된다.
const msg = age >19 ? '성인입니다.' : '미성년자입니다.';


   return (
      <div>
         {/* <h1>Hello</h1>
         <button onClick={showName }>Show name</button> 
         <button onClick={()=>{
            console.log(10);
         }}>show age</button>
         <br></br>
         <input type = 'text' onChange={(e)=>{
            console.log(e.target.value);
         }}></input> */}
         

         {/* <h2 id = 'name'>
            {name}({age}) : {msg}
         </h2>

         <UserName name = {name} />

         <button onClick={()=>{
            setName(name === 'mike'? 'jane': 'mike');
            setAge(age +1);
         }}>
            Change
         </button> */}
      

      </div>
   );
} 