
import { useState } from 'react';
import UserName from './UserName';

export default function Hello(props){ 
    const [name , setname] = useState('mike'); //새로운 state를 만들어주어 (대충 새로운 변수를 만들었다고 생각)
    const [age, setage] = useState(props.age); //넘겨받은 값은 변화없이 값은 바꾼다.
    const msg = age > 19 ? "성인입니다." : "미성년자입니다.";

    return(
        <div>
           <h1>Hello</h1>
           <h2>{name}({age}) {msg}</h2>
           <UserName name = {name} />
           <button onClick={()=>{
               setname(name === "mike" ? 'jane': 'mike');
               setage(age+1);
           }}>change</button>
        </div> 
    );
    
}