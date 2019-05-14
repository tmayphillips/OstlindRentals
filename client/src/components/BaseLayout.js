import React, {Component} from 'react'
import Menu from './Menu'
import {Footer} from './Footer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class BaseLayout extends Component {
  render() {
    return(
      <div>
        <Menu />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default BaseLayout
