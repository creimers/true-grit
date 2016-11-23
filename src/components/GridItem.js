import React, { Component } from 'react';
import classNames from 'classnames';


class GridItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  activateGridItem(event) {
    this.props.setActiveGridItemIndex(this.props.level, this.props.index)

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

    return (

      <div className={classes} onClick={this.activateGridItem.bind(this)}>

        <div className="backRow">
          {backButton}  
        </div>

        <h2>{this.props.route}</h2>

        {this.props.children.map((elm, index)=> {
          return (
          <GridItem
            setActiveGridItemIndex={this.props.setActiveGridItemIndex}
            level={1}
            key={index}
            index={index}
            parent={this.props.route}
            route={elm}
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
