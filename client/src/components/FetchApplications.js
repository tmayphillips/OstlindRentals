import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  Container,
  ButtonGroup,
  Button,
  Row} from 'reactstrap'

class FetchApplications extends Component {
  constructor() {
    super()
    this.state = {
      applications: []
    }
  }

  componentDidMount() {
    let url = 'http://localhost:8080/api/applications'
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json.applicationList)
      let applications = json.applicationList.map((application) => {
        return (
          <Container key = {application.id}>
            <div>
              <Row>
                <li>
                  <h3>{application.firstname} {application.lastname}</h3>
                  <Button>View Details</Button>
                </li>
              </Row>
            </div>
          </Container>
        )
      })
      this.setState({applications: applications})
    })
  }

  render() {
    return (
      <div>
        <ul>{this.state.applications}</ul>
      </div>
    )
  }
}

export default withRouter(FetchApplications)
