import React, { Component } from 'react';

import './Backbutton.css'

class Backbutton extends Component {
  constructor(props) {
    super(props)
    this.renderButton = this.renderButton.bind(this)
  }

  renderButton() {
    if(this.props.showButton) {
      return <span onClick={this.props.goBack}>X</span>
    }
    else{
      return <span></span>
    }
  }

  render() {
    let style = {
      color: this.props.color
    }
    return (
      <div className="Backbutton" style={style}>
        {this.renderButton()}
      </div>
    )
  }
}

export default Backbutton
