import React, { Component } from 'react';

class Label extends Component {
  render() {
    return (
      <div><label>{this.props.text}</label></div>
    );
  }
}

export default Label;
