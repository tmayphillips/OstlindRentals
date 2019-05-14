import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  InputGroup,
  InputGroupAddon} from 'reactstrap'
// import * as actionCreators from '../store/actions/actionCreators'

class AddProperty extends Component {
  constructor() {
    super()
    this.state = {
      address: '',
      city: '',
      state: '',
      zipcode: '',
      hcad: '',
      insured: false,
      insuredamount: '',
      tenantid: '',
      rent: ''
    }
  }

  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAddProperty = (
    address,
    city,
    state,
    zipcode,
    hcad,
    insured,
    insuredamount,
    tenantid,
    rent
    ) => {
      fetch('http://localhost:8080/api/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          address: address,
          city: city,
          state: state,
          zipcode: zipcode,
          hcad: hcad,
          insured: insured,
          insuredamount: insuredamount,
          tenantid: tenantid,
          rent: rent
        })
      })
    }

  render() {
    return (
      <Container>
        <div>
          <h1>Add Rental Property</h1>
          <h6>Only available for admin users.</h6>
          <Form>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input type="text" onChange={this.handleTextBoxChange} name="address" id="address" placeholder="1234 Main St" />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input type="text" onChange={this.handleTextBoxChange} name="city" id="city" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="state">State</Label>
                  <Input type="text" onChange={this.handleTextBoxChange} name="state" id="state" />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="zipcode">Zip Code</Label>
                  <Input type="text" onChange={this.handleTextBoxChange} name="zipcode" id="zipcode" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="hcad">HCAD Account Number</Label>
              <Input type="text" onChange={this.handleTextBoxChange} name="hcad" id="hcad" />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="insured">Insured (yes/no)</Label>
                  <Input type="select" onChange={this.handleTextBoxChange} name="insured" id="insured">
                    <option>Yes</option>
                    <option>No</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="insuredamount">Insured Amount</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                    <Input type="number" onChange={this.handleTextBoxChange} name="insuredamount" id="insuredamount" />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="tenantid">Tenant</Label>
                  <Input type="text" onChange={this.handleTextBoxChange} name="tenantid" id="tenantid" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="rent">Rent Amount</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                    <Input type="number" onChange={this.handleTextBoxChange} name="rent" id="rent" />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Button onClick={() => this.handleAddProperty(this.state.address,this.state.city, this.state.state, this.state.zipcode, this.state.hcad, this.state.insured, this.state.insuredamount, this.state.tenantid, this.state.rent)} type="button">Submit</Button>
          </Form>

        </div>
      </Container>
    )
  }



}

export default AddProperty
