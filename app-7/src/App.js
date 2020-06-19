import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import NewTask from "./Components/NewTask"
import List from "./Components/List"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskArr:[]
    }
  }

addToArr= (task) => {
  this.setState({
    taskArr:[ ...this.state.taskArr, task],
    
  })
}
 
  render (){
    
    return(

      <div className="App">
        <h1>Task Maker 2.0</h1>
       
        <NewTask add={this.addToArr}/>
        <List tasks={this.state.taskArr}/>
      </div>
    ) 
  };
}

export default App;
