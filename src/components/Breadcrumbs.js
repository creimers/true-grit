import React, { Component } from 'react';

import { Link } from 'react-router';

class Breadcrumbs extends Component {
  render() {
    let style = {
      color: this.props.color,
      backgroundColor: this.props.background
    }
    return (
      <div className="Breadcrumbs" style={style}>
        <Link to="/">Root</Link>
        {Object.keys(this.props.routes).map((elm, index, array) => {
        let route = [""].concat(array.slice(0, index + 1).map((elm) => this.props.routes[elm])).join('/')
          return <Link key={index} to={route}>{this.props.routes[elm]}</Link>
        })}
      </div>
    )
  }
}

export default Breadcrumbs
