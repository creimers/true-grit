import React, { Component } from 'react';


class Container extends Component {
  render() {
    const Iframe=this.props.iframe;

    return(

      <div>

        <Iframe className="iframe" src={this.props.src} height={this.props.height} width={this.props.width}/>

      </div>
      )
  }
}

export default Container
