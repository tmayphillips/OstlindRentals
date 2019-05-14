import React, {Component} from 'react'
import {
  Container,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button} from 'reactstrap'

class AddTenant extends Component {
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      phoneno: '',
      propertyid: ''
    }
  }

  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAddTenant = (
    firstname,
    lastname,
    phoneno,
    propertyid
  ) => {
    fetch('http://localhost:8080/api/tenants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        phoneno: phoneno,
        propertyid: propertyid
      })
    })
  }

  render() {
    return (
      <Container>
        <div>
          <h1>Add Tenant</h1>
          <h6>Only available for admin users</h6>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstname">First Name</Label>
                  <Input type="text" onChange={this.handleTextBoxChange} name="firstname" id="firstname" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastname">Last Name</Label>
                  <Input type="text" onChange={this.handleTextBoxChange} name="lastname" id="lastname" />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="phoneno">Phone Number</Label>
                  <Input type="text" onChange={this.handleTextBoxChange} name="phoneno" id="phoneno" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="propertyid">Property ID</Label>
                  <Input type="number" onChange={this.handleTextBoxChange} name="propertyid" id="propertyid" />
                </FormGroup>
              </Col>
            </Row>
            <Button onClick={() => this.handleAddTenant(this.state.firstname,this.state.lastname,this.state.phoneno,this.state.propertyid)} type="button">Submit</Button>
          </Form>
        </div>
      </Container>
    )
  }
}

export default AddTenant
