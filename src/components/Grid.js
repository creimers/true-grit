import React, { Component } from 'react';

import GridItem from './GridItem'

import classNames from 'classnames';


class Grid extends Component {

  constructor(props) {
    super(props)

    this.calculateTransform = this.calculateTransform.bind(this)
    this.calculateWidth = this.calculateWidth.bind(this)
    this.getRouteItemMapping = this.getRouteItemMapping.bind(this)
  }

  /**
  * calculates the transformation of the GridItem
  * @return {array} returns this mapping
  */
  calculateWidth() {
    let params = this.context.router.params
    let width = Object.keys(params).length * 2 * 100 || 100
    return width
  }

  /**
  * calculates the transformation of the GridItem
  * @return {array} returns this mapping
  */
  calculateTransform() {
    let routeItemMapping = this.getRouteItemMapping()
    let width = this.calculateWidth()
    let level = routeItemMapping.length > 0 ? routeItemMapping.length - 1 : null
    let index = routeItemMapping.length > 0 ? routeItemMapping[routeItemMapping.length - 1].index : null
    let row = index !== null ? Math.floor(index / 2) : null

    // TODO: implement the next level
    // TODO: can it be made (more) generic?

    if (width === 200 && level === 0 && index % 2 === 0) {
      return {
        translateX: 0,
        translateY: `-${row * 500}px`
      }
    }

    else if (width === 200 && level === 0 && index % 2 > 0) {
      return {
        translateX: `-${50}%`,
        translateY: `-${row * 500}px`
      }
    }

    return {translateX: 0, translateY: 0}
  }


  /**
  * maps the route params to the corresponding grid items
  * @return {array} returns this mapping
  */
  getRouteItemMapping() {
    let routerParams = this.context.router.params
    let indexMapping = []

    let getItem = (levelKey, level) => {
      let previousElement = indexMapping[level - 1]
      if (previousElement) {
          let itemIndex = previousElement.item.children.findIndex((e) => e.route === routerParams[levelKey])
          return {
            index: itemIndex,
            item: previousElement.item.children[itemIndex]
          }
      }
      else {
        let itemIndex = this.props.grid.findIndex((e) => e.route === routerParams[levelKey])
        return {
          index: itemIndex,
          item: this.props.grid[itemIndex]
        }
      }
    }

    Object.keys(routerParams).forEach((levelKey, level) => {
      indexMapping.push(getItem(levelKey, level))
    })
    
    return indexMapping
  }

  render () {
    let zoom = Object.keys(this.context.router.params).length

    let width = this.calculateWidth()
    let transform = this.calculateTransform()

    let style = {
      width: `${width}%`,
      transform: `translate(${transform.translateX}, ${transform.translateY})`
    }

    if (zoom){
      document.body.classList.add('y')
    }
    else{
      document.body.classList.remove('y')
    }

    let classes = classNames(
      'Grid',
      {
        zoom: zoom
      }
    ) 

    return (
      <div className={classes} ref={(div) => this.container = div} style={style}>
        {
          this.props.grid.map((elm, index) => {
            return <GridItem
              level={0}
              parent=""
              route={elm.route}
              key={index}
              children={elm.children}
            />
          })
        }
      </div>
    )
  }
}

Grid.contextTypes = {
  router: React.PropTypes.object
}

export default Grid
