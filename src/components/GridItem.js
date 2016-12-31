import React, { Component } from 'react';
import classNames from 'classnames';

import './GridItem.css'


class GridItem extends Component {

  constructor(props) {
    super(props)
    this.state = {animate: false}
  }

  routeGridItem(event) {
    event.stopPropagation();
    this.setState({animate: true})

    setTimeout(() => {
      this.context.router.push(this.props.route)
      this.setState({animate: false})
    }, 700)
  }

  goToParent(event) {
    this.context.router.push(["", this.props.parent].join('/'))
    event.stopPropagation();
  }

  render () {
    const active = this.props.route === this.context.router.params[`level${this.props.level}`]

    let classes = classNames(
      'GridItem',
      {
        active: active,
        animate: this.state.animate
      }
    )

    let style = {
      backgroundColor: this.props.background,
      color: this.props.color
    }

    return (

      <div className={classes} onClick={this.routeGridItem.bind(this)} style={style}>

        <header>
          <div className="title">
            <h2>{this.props.title}</h2>
          </div>
        </header>

        <div className="GridItemInner">

        </div>

      </div>
    )
  }
}

GridItem.contextTypes = {
  router: React.PropTypes.object
}

export default GridItem
