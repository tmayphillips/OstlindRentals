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

class AddRepair extends Component {
  constructor() {
    super()
    this.state = {
      propertyid: '',
      daterepaired: '',
      title: '',
      description: ''
    }
  }

  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAddRepair = (
    daterepaired,
    title,
    description
  ) => {
    fetch('http://localhost:8080/api/repairs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        propertyid: this.props.match.params.propertyid,
        daterepaired: daterepaired,
        title: title,
        description: description
      })
    })
  }

  render() {
    return (
      <Container>
        <div>
          <h1>Add Repair for {this.props.match.params.address}</h1>
          <h6>Only available for admin users</h6>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="daterepaired">Date Repaired</Label>
                  <Input type="date" onChange={this.handleTextBoxChange} name="daterepaired" id="daterepaired" />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input type="text" onChange={this.handleTextBoxChange} name="title" id="title" />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input type="textarea" onChange={this.handleTextBoxChange} name="description" id="description" />
                </FormGroup>
              </Col>
            </Row>
            <Button onClick={() => this.handleAddRepair(this.state.daterepaired,this.state.title,this.state.description)} type="button">Submit</Button>
          </Form>
        </div>
      </Container>
    )
  }
}

export default AddRepair
