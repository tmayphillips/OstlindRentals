import React, {Component} from 'react'
import FetchAllProperties from './FetchAllProperties'

export class AllProperties extends Component {
  render() {
    return (
      <div>
        <h1>All Rental Properties</h1>
        <FetchAllProperties />
      </div>
    )
  }
}
