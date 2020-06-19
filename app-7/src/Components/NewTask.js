import React, { Component } from "react";

class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  updateInput = (event) =>{
      this.setState({input: event.target.value})
  }
  addToTask = () =>{
      this.props.add(this.state.input)
      this.setState({input:''})
  }

  render() {
    console.log(this.state.input)
    return (
        <div>
            <input 
            value ={this.state.input}
            onChange={(event)=>this.updateInput(event)}
            placeholder='Place Task Here'/>

            <button onClick={this.addToTask}>Add Task</button>
        </div>

    )
  }
}

export default NewTask;
