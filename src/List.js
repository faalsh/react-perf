import React, { Component } from 'react';
import Label from './Label'
// import Immutable from 'immutable'

class List extends Component {

  shouldComponentUpdate(nextProps, nextState){
  	console.time("compare")
  	var isEqual = nextProps.labels.equals(this.props.labels)
  	console.timeEnd("compare")
  	return !isEqual
  }
  render() {
    return (
      <div>{
      	this.props.labels.map((text,i) =><Label key={i} text={text}/>)
      }</div>
    );
  }
}

export default List;
