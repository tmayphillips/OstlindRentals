import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  Container,
  ButtonGroup,
  Button} from 'reactstrap'

class FetchAllRentals extends Component {
  constructor() {
    super()
    this.state = {
      allRentals: []
    }
  }

  componentDidMount() {
    let url = 'http://localhost:8080/api/properties'
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json.propertyList)
      let allRentals = json.propertyList.map((rental) => {
        return (
          <Container key = {rental.id}>
            <div>
              <li><h3>{rental.address}</h3>
              <h5>{rental.city}, {rental.state} {rental.zipcode}</h5>
              <ButtonGroup>
                <Button outline color="primary">View Tenant</Button>
                <Button outline color="primary">View Repair Log</Button>
                <Button outline color="primary" type="button" onClick={() => this.handleApplyButton(rental.address)}>Add Repair</Button>
              </ButtonGroup>
              </li>
            </div>
          </Container>
        )
      })
      this.setState({allRentals: allRentals})
    })
  }

  render() {
    return (
      <div>
        <ul>{this.state.allRentals}</ul>
      </div>
    )
  }
}

export default withRouter(FetchAllRentals)
