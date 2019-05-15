import React, {Component} from 'react'
import FetchAllRentals from './FetchAllRentals'

export class AllRentals extends Component {
  render() {
    return (
      <div>
        <h1>All Rental Properties</h1>
        <FetchAllRentals />
      </div>
    )
  }
}
