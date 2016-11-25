import React, { Component } from 'react';
import './App.css';

import { getData } from '../data'

import Grid from './Grid'

class App extends Component {
  constructor(props) {
    super(props)
    this.getData = this.getData.bind(this)
  }

  getData() {
    return getData(this.context.router.params)
  }

  render() {
    let data = this.getData()
    console.log('render')
    let grid
    let style
    if (data.theme) {
      grid = <Grid theme={data.theme} items={data.children}/>
      style = {
        backgroundColor: data.theme.background
      }
    }
    else {
      grid = <div>Loading...</div>
      style = {}
    }
    return (
      <div className="App" style={style}>
        {grid}
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default App;
