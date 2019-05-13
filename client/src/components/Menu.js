import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export class Menu extends Component {
  render() {
    return (
      <ul className="menu">
        <li><NavLink exact activeClassName="active-link" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active-link" to="/admin/addproperty">Add Property</NavLink></li>
        
      </ul>
    )
  }
}
