import React, {Component} from 'react'
import {withRouter} from 'react-router-dom' // needed for history.push
import {connect} from 'react-redux'
import {
  Container,
  ButtonGroup,
  Button} from 'reactstrap'

class FetchAvailableRentals extends Component {
  constructor() {
    super()
    this.state = {
      availableRentals: []
    }
  }


  handleApplyButton = (rentalId) => {
    console.log("Handle Apply Button")
    console.log(rentalId)
    this.props.history.push('/apply/'+rentalId)
  }

  componentDidMount() {
    let url = 'http://localhost:8080/api/properties'
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json.propertyList)
      let availableRentals = json.propertyList.map((rental) => {
        if(rental.tenantid == '0') {
          return (
            <Container key = {rental.id}>
              <div>
                <li><h3>{rental.address}</h3>
                <h5>{rental.city}, {rental.state} {rental.zipcode}</h5>
                <ButtonGroup>
                  <Button outline color="primary"><a href="https://firebasestorage.googleapis.com/v0/b/ostlindthomas-f8c7e.appspot.com/o/RentalApplication.pdf?alt=media&token=15f2526c-e731-4b48-8f02-8d88fbc9005a">Download Application</a></Button>
                  <Button outline color="primary" type="button" onClick={() => this.handleApplyButton(rental.address)}>Apply Online</Button>
                </ButtonGroup>
                </li>
              </div>
            </Container>
          )
        }
      })
      this.setState({availableRentals: availableRentals})
    })
  }

  render() {
    return (
      <div>
        <ul>{this.state.availableRentals}</ul>
      </div>
    )
  }
}

export default withRouter(FetchAvailableRentals)
