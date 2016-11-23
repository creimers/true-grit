import React, { Component } from 'react';

import GridItem from './GridItem'


class Grid extends Component {

  constructor(props) {
    super(props)
    this.getWidth = this.getWidth.bind(this)
    this.getTranslate = this.getTranslate.bind(this)
    this.setActiveGridItemIndex = this.setActiveGridItemIndex.bind(this)

    this.state = {
      grid: {
        //'john': {children: ['walrus', 'nowhere man']},
        //'paul': {children: ['yesterday', 'black bird']},
        //'george': {children: ['while my guitar', 'here comes the sun']},
        //'ringo': {children: ['yellow submarine', 'with a little help from my friends']},
        'john': {children: []},
        'paul': {children: []},
        'george': {children: []},
        'ringo': {children: []},
        'johannes': {children: []},
        'ruby': {children: []},
      },
      activeGridItemLevel: undefined,
      activeGridItemIndex: undefined,
      activeGridItemRow: undefined
    }
  }

  getWidth() {
    let params = this.context.router.params
    let width = Object.keys(params).length * 2 * 100 || 100
    return width
  }

  getTranslate() {
    console.log(this.state.activeGridItemRow)
    let width = this.getWidth()
    if (width === 200 && this.state.activeGridItemLevel === 0 && this.state.activeGridItemIndex % 2 === 0) {
      return `translate(0, -${this.state.activeGridItemRow * 500}px)`
    }
    else if (width === 200 && this.state.activeGridItemLevel === 0 && this.state.activeGridItemIndex % 2 > 0) {
      return `translate(-${50}%, -${this.state.activeGridItemRow * 500}px)`
    }
  }

  setActiveGridItemIndex(level, index) {
    console.log(level, index) 
    this.setState({
      activeGridItemLevel: level,
      activeGridItemIndex: index,
      activeGridItemRow: Math.floor(index / 2)
    })
  }

  render () {

    let style = {
      width: `${this.getWidth()}%`,
      transform: this.getTranslate()
    }

    return (
      <div className="Grid" ref={(div) => this.container = div} style={style}>
        {
          Object.keys(this.state.grid).map((elm, index) => {
          return <GridItem
            setActiveGridItemIndex={this.setActiveGridItemIndex}
            level={0}
            parent=""
            route={elm}
            key={index}
            index={index}
            children={this.state.grid[elm].children}
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
