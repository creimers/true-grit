import React, { Component } from 'react';
import './App.css';

import Grid from './Grid'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      grid: [
        {
          route: 'john',
          index: 0,
          //children: [{route: 'walrus', index: 0}, {route: 'nowhere man', index: 1}, {route: 'help', index: 2}, {route: 'imagine', index: 3}]
          children: []
        },
        {
          route: 'paul',
          index: 1,
          //children: [{route: 'yesterday', index: 0}, {route: 'black bird', index: 1}]
          children: []
        },
        {
          route: 'ringo',
          index: 2,
          //children: [{route: 'yellow submarine', index: 0}, {route: 'boys', index: 1}]
          children: []
        },
        {
          route: 'george',
          index: 3,
          //children: [{route: 'yellow submarine', index: 0}, {route: 'boys', index: 1}]
          children: []
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
