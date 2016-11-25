import React, { Component } from 'react';
import classNames from 'classnames';


class GridItem extends Component {

  routeGridItem(event) {
    //level 0
    if (this.props.level === 0) {
      this.context.router.push(["", this.props.route].join('/'))
    }

    //level 1 and parent not active
    else if(this.props.level === 1 && this.context.router.params['level0'] !== this.props.parent) {
      console.log('click on child of unactive parnet')
      this.context.router.push(["", this.props.parent].join('/'))
    }

    // level 1 and parent active
    else if(this.props.level === 1 && this.context.router.params['level0'] === this.props.parent) {
      this.context.router.push(["", this.props.parent, this.props.route].join('/'))
    }
    event.stopPropagation();
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
