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
      }
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
