import dummy from "../db/data.json";
import {Link} from 'react-router-dom';

export default function DayList(){
//map 배열을 받아서 또 다른 배열은 반환해주는 것
    return<ul className="list_day">
        {dummy.days.map(day =>(
            <li key = {day.id}>
                <Link to= {`/day/${day.day}`}>Day {day.day}</Link>
                 </li>
        ))}
    </ul>
}