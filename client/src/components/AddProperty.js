import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon} from 'reactstrap'
// import * as actionCreators from '../store/actions/actionCreators'

class AddProperty extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  handleAddBookTextBox = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Container>
        <div>
          <h1>Add Rental Property</h1>
          <h3>Only available for admin users.</h3>
          <Form>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input type="text" name="address" id="address" placeholder="1234 Main St" />
            </FormGroup>
            <FormGroup>
              <Label for="address2">Address 2</Label>
              <Input type="text" name="address2" id="address2" placeholder="Apartment, studio, or floor" />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input type="text" name="city" id="city" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="state">State</Label>
                  <Input type="text" name="state" id="state" />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="zipcode">Zip Code</Label>
                  <Input type="text" name="zipcode" id="zipcode" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="hcad">HCAD Account Number</Label>
              <Input type="text" name="hcad" id="hcad" />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="insured">Insured (yes/no)</Label>
                  <Input type="select" name="insured" id="insured">
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
                    <Input type="number" name="insuredamount" id="insuredamount" />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="tenantid">Tenant</Label>
                  <Input type="text" name="tenantid" id="tenantid" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="rent">Rent Amount</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                    <Input type="number" name="rent" id="rent" />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Button>Submit</Button>
          </Form>

        </div>
      </Container>
    )
  }



}

export default AddProperty
