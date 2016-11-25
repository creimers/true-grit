import React, { Component } from 'react';


class Breadcrumbs extends Component {
  render() {
    //let style = {
      //backgroundColor: this.props.theme.background,
      //color: this.props.theme.color
    //}
    return (
      <div className="Breadcrumbs">
        {Object.keys(this.props.routes).map(elm => {
          return <span>{this.props.routes[elm]}</span>
        })}
      </div>
    )
  }
}

export default Breadcrumbs
