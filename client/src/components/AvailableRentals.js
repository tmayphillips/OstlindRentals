import React, {Component} from 'react'
import FetchAvailableRentals from './FetchAvailableRentals'

export class AvailableRentals extends Component {


  render() {
    return (
      <div>
        <h1>Current Available Rentals</h1>
        <FetchAvailableRentals />
      </div>
    )
  }
}
