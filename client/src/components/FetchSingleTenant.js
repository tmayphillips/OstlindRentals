

import React, {Component} from 'react'
import {withRouter} from 'react-router-dom' // needed for history.push
import {connect} from 'react-redux'
import {
  Container,
  ButtonGroup,
  Button} from 'reactstrap'

class FetchSingleTenant extends Component {
  constructor() {
    super()
    this.state = {
      tenant: '',
      tenantid: ''
    }
  }

  componentDidMount() {
    let url = 'http://localhost:8080/api/tenants'

    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json.tenantList)
      let tenant = json.tenantList.map((tenant) => {
        if(tenant.id == parseInt(this.props.tenantid,10)) {
          return (
            <Container key = {tenant.id}>
              <div>
                <li>
                  <h3>{tenant.firstname} {tenant.lastname}</h3>
                  <h5>{tenant.phoneno}</h5>
                </li>
              </div>
            </Container>
          )
        }
      })
      this.setState({tenant: tenant})
    })
  }

  render() {
    return(
      <div>
        <ul>{this.state.tenant}</ul>
      </div>
    )
  }
}

export default FetchSingleTenant
