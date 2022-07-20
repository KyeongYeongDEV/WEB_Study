import World from './World';
import styles from "./Hello.module.css";

export default function Hello(){
    return(
        <div>
            <h1 style={{
                color : '#f00',

            }}>Hello</h1>;
            <div className={styles.box}>Hello</div>
        </div>
    );
    
}