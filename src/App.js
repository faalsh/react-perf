import React, { Component } from 'react';
import List from './List'
import SmallComponent from './SmallComponent'
class App extends Component {
  constructor(props){
    super(props)
    var labels = []
    for (var i = 0; i < 10000; i++) {
      labels.push("abc" + i);
    }
    var width = "100%"
    this.state = {labels,width}
    
  }
  handleLow(){
    var newLabels = this.state.labels.map((label,i) => 
      i%2 === 0?label:"new"+i
    );

    this.setState({labels:newLabels})
  }
  handleHigh(){
    this.setState({width: "50%"})
  }
  handleReset(){
    var labels = []
    for (var i = 0; i < 10000; i++) {
      labels.push("abc" + i);
    }
    var width = "100%"
    this.setState({labels,width})
  }
  componentWillUpdate(){
    console.time("update")
  }
  componentDidUpdate(){
    console.timeEnd("update")
  }
  componentWillMount(){
    console.time("mount")
  }
  componentDidMount(){
    console.timeEnd("mount")
  }
  render() {
    return (
      <div style={{width:this.state.width}}>
        <SmallComponent />
        <input type="button" value="Low in tree" onClick={this.handleLow.bind(this)}/>
        <input type="button" value="High in tree" onClick={this.handleHigh.bind(this)}/>
        <input type="button" value="Reset" onClick={this.handleReset.bind(this)}/>
        <List labels={this.state.labels} />
      </div>
    );
  }
}

export default App;
