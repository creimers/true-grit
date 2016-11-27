import React, { Component } from 'react';

import './Title.css'

class Title extends Component {
  render() {
    let style = {
      color: this.props.color
    }
    return (
      <div className="Title container" style={style}>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default Title
