import React, { Component } from 'react';
import './App.css';

import { getData } from '../data'

import Grid from './Grid'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: undefined
    }
  }

  componentDidMount() {
    this.setState({
      data: getData(this.context.router.params)
    })
  }

  render() {
    let grid
    let style
    if (this.state.data) {
      grid = <Grid theme={this.state.data.theme} items={this.state.data.children}/>
      style = {
        backgroundColor: this.state.data.theme.background
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
