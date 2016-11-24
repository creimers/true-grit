import React, { Component } from 'react';
import './App.css';

import Grid from './Grid'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      grid: {
        'john': {children: ['walrus', 'nowhere man', 'help', 'imagine']},
        'paul': {children: ['yesterday', 'black bird']},
        'george': {children: ['while my guitar', 'here comes the sun']},
        'ringo': {children: ['yellow submarine', 'with a little help from my friends']},
      },

      newGrid: [
        {
          route: 'john',
          index: 0,
          children: [{route: 'walrus', index: 0}, {route: 'nowhere man', index: 1}, {route: 'help', index: 2}, {route: 'imagine', index: 3}]
        },
        {
          route: 'paul',
          index: 1,
          children: [{route: 'yesterday', index: 0}, {route: 'black bird', index: 1}]
        }
      ]

    }
  }

  render() {
    return (
      <div>
        <Grid grid={this.state.grid}/>
      </div>
    );
  }
}

export default App;
