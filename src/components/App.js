import React, { Component } from 'react';
import './App.css';

import { getData, getTheme } from '../data'

import Grid from './Grid'
//import Breadcrumbs from './Breadcrumbs'
import Container from './Container'

class App extends Component {
  constructor(props) {
    super(props)
    this.getData = this.getData.bind(this)
    this.getThemeForRoute = this.getThemeForRoute.bind(this)

    this.state = {theme: getTheme()}
  }

  getData() {
    return getData(this.context.router.params)
  }

  getThemeForRoute() {
    let evenRoute = Object.keys(this.context.router.params).length % 2 === 0

    if(evenRoute) {
      return this.state.theme
    }
    else {
      return {background: this.state.theme.color, color: this.state.theme.background}
    }
  }

  render() {
    let data = this.getData()
    let theme = this.getThemeForRoute()
    console.log(theme)

    let content
    let style

    if (data.children) {
      content = <Grid theme={theme} items={data.children}/>
      style = {
        backgroundColor: theme.background
      }
    }
    else {
      content = <Container theme={theme}><div>{data.content}</div></Container>
      style = {
        backgroundColor: theme.background
      }
    }
    //let breadcrumbs = <Breadcrumbs color={theme.background} background={theme.color} routes={this.context.router.params}/>
    return (
      <div className="App" style={style}>
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
