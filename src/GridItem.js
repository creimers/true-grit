import React, { Component } from 'react';
import { Link  } from 'react-router'
import classNames from 'classnames';


class GridItem extends Component {
  render () {
    let firstLevelActive = this.props.level === 0 && this.props.route === this.props.firstLevel
    let secondLevelActive = this.props.level === 1 && this.props.route === this.props.secondLevel
    let classes = classNames(
      'GridItem',
      {
        active: firstLevelActive || secondLevelActive}
    )
    console.log(this.props)
    return (
      <div className={classes}>
        <Link to={this.props.parentRoute + this.props.route}>
          {this.props.route}
        </Link>
        {this.props.children.map((elm, index)=> {
          return (
          <GridItem
            level={1}
            key={index}
            parentRoute={this.props.parentRoute + this.props.route + '/'}
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

export default GridItem
