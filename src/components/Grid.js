import React, { Component } from 'react';

import GridItem from './GridItem'

import './Grid.css'


class Grid extends Component {

  constructor(props) {
    super(props)
    this.renderGridElement = this.renderGridElement.bind(this)
  }

  renderGridElement(elm, index) {
    return (
      <GridItem
        route={elm.absolute_url}
        title={elm.title}
        key={index}
        children={elm.children}
        background={this.props.theme.color}
        color={this.props.theme.background}
      />
      ) 
  }

  render () {

    let style = {
      backgroundColor: this.props.theme.background,
      color: this.props.theme.color
    }

    return (
      <div className="Grid" style={style}>
        {this.props.items.map((elm, index) => this.renderGridElement(elm, index))}
      </div>
    )
  }
}

Grid.contextTypes = {
  router: React.PropTypes.object
}

export default Grid
