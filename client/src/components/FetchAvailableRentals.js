import React, {Component} from 'react'
import {connect} from 'react-redux'

class FetchAvailableRentals extends Component {
  constructor() {
    super()
    this.state = {
      availableRentals: []
    }
  }

  componentDidMount() {
    let url = 'http://localhost:8080/api/availableRentals'
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      let availableRentals = json.availableRentalsList.map((rental) => {
        if(rental.tenantid == 'none') {
          return (
            <div key = {rental.id}>
              <p>{rental.address}</p>
            </div>
          )
        }
      })
      this.setState({availableRentals: availableRentals})
    })
  }

  render() {
    return (
      <div>
        {this.state.availableRentals}
      </div>
    )
  }
}

export default FetchAvailableRentals
