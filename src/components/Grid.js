import React, { Component } from 'react';

import GridItem from './GridItem'


class Grid extends Component {

  constructor(props) {
    super(props)
    this.state = {
      grid: {
        'john': {children: ['walrus', 'nowhere man']},
        'paul': {children: ['yesterday', 'black bird']},
        'george': {children: ['while my guitar', 'here comes the sun']},
        'ringo': {children: ['yellow submarine', 'with a little help from my friends']},
      }
    }
  }
  render () {
    return (
      <div className="Grid">
        {
          Object.keys(this.state.grid).map((elm, index) => {
          return <GridItem
            level={0}
            parent=""
            route={elm}
            key={index}
            children={this.state.grid[elm].children}
          />
          })
        }
      </div>
    )
  }
}

export default Grid
