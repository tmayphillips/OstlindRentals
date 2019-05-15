import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actions/actionCreators'
import {
  Container,
  ButtonGroup,
  Button} from 'reactstrap'

class FetchAllProperties extends Component {
  constructor() {
    super()
    this.state = {
      allProperties: []
    }
  }

  handleViewTenant = (tenantid) => {
    console.log("Handle View Tenant")
    console.log(tenantid)
    this.props.history.push('/admin/tenants/'+tenantid)
  }

  handleViewRepairs = (propertyid,address) => {
    console.log("Handle View Repairs")
    console.log(propertyid)
    this.props.history.push('/admin/repairs/'+propertyid+'/'+address)
  }

  handleAddRepair = (propertyid,address) => {
    console.log("Handle Add Repair")
    console.log(propertyid)
    console.log(address);
    this.props.history.push('/admin/addrepair/'+propertyid+'/'+address)
  }



  componentDidMount() {
    let url = 'http://localhost:8080/api/properties'
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json.propertyList)
      let allProperties = json.propertyList.map((property) => {
        return (
          <Container key = {property.id}>
            <div>
              <li><h3>{property.address}</h3>
              <h5>{property.city}, {property.state} {property.zipcode}</h5>
              <ButtonGroup>
                <Button outline color="primary" type="button" onClick={() => this.handleViewTenant(property.tenantid)}>View Tenant</Button>
                <Button outline color="primary"type="button" onClick={() => this.handleViewRepairs(property.id, property.address)}>View Repair Log</Button>
                <Button outline color="primary" type="button" onClick={() => this.handleAddRepair(property.id, property.address)}>Add Repair</Button>
              </ButtonGroup>
              </li>
            </div>
          </Container>
        )
      })
      this.setState({allProperties: allProperties})
    })
  }

  render() {
    return (
      <div>
        <ul>{this.state.allProperties}</ul>
      </div>
    )
  }
}

const mapDispatchToProps = (state) => {
  return {

  }
}

export default withRouter(FetchAllProperties)
