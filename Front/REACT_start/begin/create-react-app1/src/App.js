import React, {Component} from 'react';
import Subject  from './content/Subject';
import Content from './content/Content';
import TOC from './content/TOC';


class App extends Component{
  constructor(props){//초기화를 담당
    super(props);
    this.state = { 
      mode:"read",
      selected_content_id:2,
      welcome:{title:"Welcome", desc:'Hello, React!!'},
      subject:{title:'WEB', sub:'world wide web!'},
      contents:[
        {id:1, title:'HTML', desc:"HTML is for imformation"},
        {id:2, title:'CSS', desc:"CSS is for design"},
        {id:3, title:'JavaScript', desc:"JavaScript is for interactive"},
      ]
    }
  }
  render(){
    
    let _title,_desc =null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
       _desc= this.state.welcome.desc;

    }else if(this.state.mode === 'read'){
      let i=0;
      while(i<this.state.contents.length){
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
     
    }
    return(
     <div className='App'>
      <Subject 
      title = {this.state.subject.title} 
      sub = {this.state.subject.sub}
      onChangePage= {function(){
        this.setState({mode:'welcome'});
      }.bind(this)}

      ></Subject>
      
      <TOC onChangePage={function(id){
        this.setState({
          mode:'read',
          selected_contnet_id:Number(id)
        });
      }.bind(this)} 
      data={this.state.contents}></TOC>
      <Content 
      title ={_title}
      desc ={_desc}></Content>
     </div>
    );
  } 
}

export default App;
