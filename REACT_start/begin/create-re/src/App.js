import React,{Component} from 'react';
import './App.css';
import Subject from './con/component/Subject';
import TOC from './con/component/TOC';
import Control from './con/component/Control';
import ReadContent from './con/component/ReadContent';
import CreateContent from './con/component/CreateContent';
import UpdateContent from './con/component/UpdataContent';


class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id =3;
    this.state = { 
      mode:'welcome',
      selected_content_id:2,
      subject:{ title : 'WEB', sub:"World wide Web!" }  ,
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}   
      ]
    }
  }
  getReadContent(){
    let i =0;
    while(i < this.state.contents.length){
      let data = this.state.contents[i]
      if(data.id === this.state.selected_content_id){
        return data;
      }
      i++;
    }
  }
  getContent(){
    let _title, _desc,_article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title ={_title} desc = {_desc}></ReadContent>
    }else if(this.state.mode === 'read'){
      let _content =  this.getReadContent();
      _article = <ReadContent title ={_content.title} desc = 
      {_content.desc}></ReadContent>
    }else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title,_desc){
        this.max_content_id = this.max_content_id +1;

        let _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id, title:_title, desc: _desc})
        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id: this.max_content_id
        });
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === 'update'){
       let _content = this.getReadContent(); //원본을 바꾸지 않고 복사를 하였다
       _article = <UpdateContent data = {_content} onSubmit={
         function(_id, _title, _desc){
            let _contents = Array.from(this.state.contents);
            let i=0;
            while(i < _content.length){
              if(_content[i].id === _id){
                _contents[i] = {id:_id, title: _title, desc:_desc};
                break;
              }
              i++;
            }
            this.setState({
              contents:_contents,
              mode:'read'
        });

       }.bind(this)}></UpdateContent>
    }
    return _article;
  }
  render(){
    return( 
      <div className='App'>
         <Subject 
         title ={this.state.subject.title} 
         sub = {this.state.subject.sub}
         onChangePage = {function(){
           this.setState({mode:'welcome'})
         }.bind(this)}
         ></Subject>

         <TOC 
          onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
         }.bind(this)} 
        let data = {this.state.contents}
         ></TOC>
         <Control onChangeMode = {function(_mode){ 
           if(_mode === 'delete'){
            if(window.confirm('really?')){
              let _contents = Array.from(this.state.contents);
              let i=0;
              while(i < this.state.contents.length){
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i,1);
                  break;
                }
                 i++;
              }
              this.setState({
                mode:'welcome',
                contents:_contents
              });
              alert('deleted!');
            }
           }else{

           }
           this.setState({
             mode:_mode
           })
         }.bind(this)}></Control>
          {this.getContent()}
      </div>
    );
  }
}

export default App;
