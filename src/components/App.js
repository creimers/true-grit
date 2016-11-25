import React, { Component } from 'react';
import './App.css';

import { getData } from '../data'

import Grid from './Grid'
import Breadcrumbs from './Breadcrumbs'
import Container from './Container'

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

    let content
    let style

    if (data.children) {
      content = <Grid theme={data.theme} items={data.children}/>
      style = {
        backgroundColor: data.theme.background
      }
    }
    else {
      content = <Container theme={data.theme}><div>{data.content}</div></Container>
      style = {
        backgroundColor: data.theme.background
      }
    }
    return (
      <div className="App" style={style}>
        <Breadcrumbs color={data.theme.background} background={data.theme.color} routes={this.context.router.params}/>
        <div className="AppContent">
          {content}
        </div>
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default App;
