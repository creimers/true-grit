import React, { Component } from 'react';
import classNames from 'classnames';


class GridItem extends Component {

  //constructor(props) {
    //super(props)
    //this.state = {
      //isInitiallyActive: false
    //}
  //}

  componentDidMount() {
    const active = this.props.route === this.context.router.params[`level${this.props.level}`]
    if(active){
      this.props.setActiveGridItemIndex(this.props.level, this.props.index)
    }
  }

  routeGridItem(event) {
    //level 0
    if (this.props.level === 0) {
      this.context.router.push(["", this.props.route].join('/'))
      this.props.setActiveGridItemIndex(this.props.level, this.props.index)
    }

    //level 1 and parent not active
    else if(this.props.level === 1 && this.context.router.params['level0'] !== this.props.parent) {
      console.log('click on child of unactive parnet')
      this.context.router.push(["", this.props.parent].join('/'))
      this.props.setActiveGridItemIndex(this.props.level - 1, this.props.parentIndex)
    }

    // level 1 and parent active
    else if(this.props.level === 1 && this.context.router.params['level0'] === this.props.parent) {
      this.context.router.push(["", this.props.parent, this.props.route].join('/'))
      // TODO: implement this in the Grid component
      this.props.setActiveGridItemIndex(this.props.level, this.props.index)
    }
    event.stopPropagation();
  }

  goToParent(event) {
    this.context.router.push(["", this.props.parent].join('/'))
    if(this.props.level === 0) {
      this.props.resetGrid()
    }
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

      <div className={classes} onClick={this.routeGridItem.bind(this)}>

        <header>
          <div className="title">
            <h2>{this.props.route}</h2>
          </div>
          {backButton}
        </header>

        <div className="GridItemInner">

          {this.props.children.map((elm, index)=> {
            return (
            <GridItem
              setActiveGridItemIndex={this.props.setActiveGridItemIndex}
              level={1}
              key={index}
              index={index}
              parent={this.props.route}
              parentIndex={this.props.index}
              route={elm}
              children={[]}
            />
            )
          })}

        </div>

      </div>
    )
  }
}

GridItem.contextTypes = {
  router: React.PropTypes.object
}

export default GridItem
