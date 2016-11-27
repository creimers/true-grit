import React, { Component } from 'react';


class Container extends Component {
  render() {
    let style = {
      backgroundColor: this.props.theme.background,
      color: this.props.theme.color
    }
    return (
      <div className="container" style={style}>
        {this.props.children}
      </div>
    )
  }
}

export default Container
