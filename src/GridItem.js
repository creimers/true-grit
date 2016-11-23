import React, { Component } from 'react';
import classNames from 'classnames';


class GridItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  goToRoute(route) {
    this.context.router.push(route)
    event.stopPropagation();
  }

  goToGridItemRoute(event) {

    //level 0
    if (this.props.level === 0) {
      this.context.router.push(["", this.props.route].join('/'))
    }

    //level 1 and parent not active
    else if(this.props.level === 1 && this.context.router.params['level0'] !== this.props.parent) {
      this.context.router.push(["", this.props.parent].join('/'))
    }

    // level 1 and parent active
    else if(this.props.level === 1 && this.context.router.params['level0'] === this.props.parent) {
      this.context.router.push(["", this.props.parent, this.props.route].join('/'))
    }
    event.stopPropagation();
  }

  render () {
    const active = this.props.route === this.context.router.params[`level${this.props.level}`]

    let classes = classNames(
      'GridItem',
      {active: active}
    )

    return (

      <div className={classes} onClick={this.goToGridItemRoute.bind(this)}>

        <h2>{this.props.route}</h2>

        {this.props.children.map((elm, index)=> {
          return (
          <GridItem
            level={1}
            key={index}
            parent={this.props.route}
            route={elm}
            secondLevel={this.props.secondLevel}
            children={[]}
          />
          )
        })}
      </div>
    )
  }
}

GridItem.contextTypes = {
  router: React.PropTypes.object
}

export default GridItem
