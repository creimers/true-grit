import React, { Component } from 'react';
import './App.css';

import { getData, getTheme } from '../data'

import classNames from 'classnames';
import Backbutton from './Backbutton'
import Grid from './Grid'
import Introduction from './Introduction'
import Title from './Title'
//import Breadcrumbs from './Breadcrumbs'
import Container from './Container'
import CSSTransitionGroup from 'react-addons-css-transition-group'


class App extends Component {
  constructor(props) {
    super(props)
    this.getData = this.getData.bind(this)
    this.getThemeForRoute = this.getThemeForRoute.bind(this)
    this.goBack = this.goBack.bind(this)

    this.state = {
      theme: getTheme(),
      scaleDown: false
    }
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

  goBack() {
    let paramKeys = Object.keys(this.context.router.params)
    let levelUpKeys = paramKeys.slice(0, paramKeys.length - 1)
    let upRoutes = levelUpKeys.map(elm => this.context.router.params[elm])
    this.setState({scaleDown: true})
    setTimeout(() => {
      this.context.router.push('/' + upRoutes.join('/'))
      this.setState({scaleDown: false})
    }, 500)
  }

  render() {
    let data = this.getData()
    let theme = this.getThemeForRoute()

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

    let classes = classNames(
      'AppContent',
      {
        scaledown: this.state.scaleDown
      }
    )
    //let breadcrumbs = <Breadcrumbs color={theme.background} background={theme.color} routes={this.context.router.params}/>
    return (
      <div className="App" style={style}>
        <div className={classes}>
          <Backbutton color={theme.color} goBack={this.goBack} showButton={Object.keys(this.context.router.params).length}/>
          <Title title={data.id} style={style} color={theme.color}/>
          <Introduction color={theme.color}/>
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
