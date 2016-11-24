import React, { Component } from 'react';

import GridItem from './GridItem'

import classNames from 'classnames';


class Grid extends Component {

  constructor(props) {
    super(props)

    this.calculateTranslate = this.calculateTranslate.bind(this)
    this.getTranslate = this.getTranslate.bind(this)
    this.getWidth = this.getWidth.bind(this)
    this.resetGrid = this.resetGrid.bind(this)
    this.setActiveGridItemIndex = this.setActiveGridItemIndex.bind(this)

    this.state = {
      activeGridItemLevel: undefined,
      activeGridItemIndex: undefined,
      activeGridItemRow: undefined,
      translateX: 0,
      translateY: 0,
      zoom: false
    }
  }

  getWidth() {
    let params = this.context.router.params
    let width = Object.keys(params).length * 2 * 100 || 100
    return width
  }

  getTranslate(width, level, row, index) {

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

    // TODO: implement the next level
    // TODO: can it be made (more) generic?

    return {translateX: 0, translateY: 0}
  }

  calculateTranslate() {
    const routerParams = this.context.router.params
    const depth = routerParams.length // == level
  }

  setActiveGridItemIndex(level, index) {
    const row = Math.floor(index / 2)
    const width = this.getWidth()
    const translate = this.getTranslate(width, level, row, index)
    const zoom = Object.keys(this.context.router.params).length

    this.setState({
      activeGridItemLevel: level,
      activeGridItemIndex: index,
      activeGridItemRow: row,
      translateX: translate.translateX,
      translateY: translate.translateY,
      zoom: zoom
    })
  }

  resetGrid() {
    this.setState({
      activeGridItemLevel: undefined,
      activeGridItemIndex: undefined,
      activeGridItemRow: undefined,
      translateX: 0,
      translateY: 0,
      zoom: false
    })
  }

  render () {
    console.log(this.context.router.params)

    this.calculateTranslate()

    let style = {
      width: `${this.getWidth()}%`,
      transform: `translate(${this.state.translateX}, ${this.state.translateY})`
    }

    if (this.state.zoom){
      document.body.classList.add('y')
    }
    else{
      document.body.classList.remove('y')
    }

    let classes = classNames(
      'Grid',
      {
        zoom: this.state.zoom
      }
    ) 

    return (
      <div className={classes} ref={(div) => this.container = div} style={style}>
        {
          Object.keys(this.props.grid).map((elm, index) => {
          return <GridItem
            setActiveGridItemIndex={this.setActiveGridItemIndex}
            resetGrid={this.resetGrid}
            level={0}
            parent=""
            route={elm}
            key={index}
            index={index}
            children={this.props.grid[elm].children}
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
