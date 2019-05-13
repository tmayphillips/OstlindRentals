import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Col, Row, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'
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
        </Form>

      </div>
    )
  }



}

export default AddProperty
