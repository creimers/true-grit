import React, { Component } from 'react';
import classNames from 'classnames';


class GridItem extends Component {

  routeGridItem(event) {
    event.stopPropagation();
    let currentPath = this.context.router.getCurrentLocation().pathname 
    let path = currentPath !== "/" ? currentPath : ''

    this.context.router.push([path, this.props.route].join('/'))
  }

  goToParent(event) {
    this.context.router.push(["", this.props.parent].join('/'))
    event.stopPropagation();
  }

  render () {
    const active = this.props.route === this.context.router.params[`level${this.props.level}`]

    let classes = classNames(
      'GridItem',
      {active: active}
    )

    let backButton
    if (active) {
      backButton = <span onClick={this.goToParent.bind(this)}>X</span>
    }
    else {
      backButton = <span></span>
    }

    let children
    if (this.props.children) {
      children = this.props.children.map((elm, index) => {
        return (
          <GridItem
            level={1}
            key={index}
            parent={this.props.route}
            route={elm.route}
            children={[]}
          />
        )
      })
    }

    else {
      children = <span></span>
    }

    let style = {
      backgroundColor: this.props.background,
      color: this.props.color
    }

    return (

      <div className={classes} onClick={this.routeGridItem.bind(this)} style={style}>

        <header>
          <div className="title">
            <h2>{this.props.route}</h2>
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
