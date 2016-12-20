import React, { Component } from 'react';
import Label from './Label'

class SmallComponent extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  		title: "initial"
  	}
  }
  handleChange(){
  	this.setState({title:"new text"})
  }
  handleReset(){
  	this.setState({title: "initial"})
  }
  componentWillUpdate(){
    console.time("update_small")
  }
  componentDidUpdate(){
    console.timeEnd("update_small")
  }
  render() {
    return (
      <div>
        <input type="button" value="Small change" onClick={this.handleChange.bind(this)}/>
        <input type="button" value="Reset" onClick={this.handleReset.bind(this)}/>
        <div>{this.state.title}</div>
      </div>
   
    );
  }
}

export default SmallComponent;
