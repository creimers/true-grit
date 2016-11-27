import React, { Component } from 'react';

import CSSTransitionGroup from 'react-addons-css-transition-group'

import GridItem from './GridItem'

class Grid extends Component {

  constructor(props) {
    super(props)
    this.renderGridElement = this.renderGridElement.bind(this)
  }

  renderGridElement(elm, index) {
    return (
      <GridItem
        route={elm.id}
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
        <CSSTransitionGroup
          component="div"
          style={style}
          className="Grid"
          transitionName="GridItem"
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={100}
        >
          {this.props.items.map((elm, index) => this.renderGridElement(elm, index))}
        </CSSTransitionGroup>
    )
  }
}

Grid.contextTypes = {
  router: React.PropTypes.object
}

export default Grid
