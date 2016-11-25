import React, { Component } from 'react';

import GridItem from './GridItem'

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

    let parentIndex = level > 0 ? routeItemMapping[routeItemMapping.length - 2].index : undefined
    let index = routeItemMapping.length > 0 ? routeItemMapping[routeItemMapping.length - 1].index : null

    // TODO: parentRow
    let parentRow = level > 0 ? Math.floor(parentIndex / 2) : undefined
    let row = index !== null ? Math.floor(index / 2) : null

    // TODO: implement the next level
    // TODO: can it be made (more) generic?

    // level 0, even
    if (width === 200 && level === 0 && index % 2 === 0) {
      return {
        translateX: 0,
        translateY: `-${row * 500}px`
      }
    }

    // level 0, odd
    else if (width === 200 && level === 0 && index % 2 > 0) {
      return {
        translateX: `-${50}%`,
        translateY: `-${row * 500}px`
      }
    }

    //////////
    // LEVEL 1
    //////////

    // level 1, even, parent even
    else if (width === 400 && level === 1 && index % 2 === 0 && parentIndex % 2 === 0) {
      console.log('level 1 / even / parent even')
      console.log('row: ', row)
      console.log('parentRow', parentRow)
      return {
        translateX: 0,
        translateY: `-${(row + parentRow) * 500}px`
      }
    }

    // level 1, even, parent odd
    else if (width === 400 && level === 1 && index % 2 === 0 && parentIndex % 2 > 0) {
      console.log('level 1 / even / parent odd')
      console.log('row: ', row)
      console.log('parentRow', parentRow)

      return {
        translateX: `-${50}%`,
        translateY: `-${(row + parentRow) * 500}px`
      }
    }

    // level 1, odd, parent even
    else if (width === 400 && level === 1 && index % 2 > 0 && parentIndex % 2 === 0) {
      console.log('level 1 / odd / parent even')
      console.log('row: ', row)
      console.log('parentRow', parentRow)
      return {
        translateX: `-${25}%`,
        translateY: `-${(row + parentRow) * 500}px`
      }
    }

    // level 1, odd, parent odd
    else if (width === 400 && level === 1 && index % 2 > 0 && parentIndex % 2 > 0) {
      console.log('level 1 / odd / parent odd')
      console.log('row: ', row)
      console.log('parentRow', parentRow)

      return {
        translateX: `-${75}%`,
        translateY: `-${(row + parentRow) * 500}px`
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

    let style = {
      backgroundColor: this.props.theme.background,
      color: this.props.theme.color
    }

    return (
      <div className="Grid" style={style}>
        {
          this.props.items.map((elm, index) => {
            return <GridItem
              route={elm.id}
              key={index}
              children={elm.children}
              background={this.props.theme.color}
              color={this.props.theme.background}
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
