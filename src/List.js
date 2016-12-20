import React, { Component } from 'react';
import Label from './Label'

class List extends Component {
  render() {
    return (
      <div>{
      	this.props.labels.map((text,i) =><Label key={i} text={text}/>)
      }</div>
    );
  }
}

export default List;
