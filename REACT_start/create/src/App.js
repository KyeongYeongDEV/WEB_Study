import React,{Component} from 'react';
import './App.css';


class App extends Component{
  render(){
    return(
      <div className = "App">
        <Subject 
            title = "WED"
            sub ="World wide Web!">
        </Subject>
      </div>
    );
  }
}

export default App;