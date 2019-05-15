import React, {Component} from 'react'
import {
  Container,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Alert,
  Card,
  CardTitle,
  Button
} from 'reactstrap'
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import ImageUpload from './ImageUpload'


class Apply extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      dl: '',
      dlState: '',
      ssn: '',
      coFirstName: '',
      coLastName: '',
      coDl: '',
      coDlState: '',
      coSsn: '',
      otherResidents: '',
      currentIncome: '',
      currentHouseholdIncome: '',
      currentPayment: '',
      employer: '',
      supervisor: '',
      supervisorPhoneNo: '',
      verifyMethod: '',
      isUploading: false,
      progress: 0,
      files: []
    }
  }

  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  customOnChangeHandler = (event) => {
    const { target: { files } } = event;
    const filesToStore = [];
    files.forEach(file => filesToStore.push(file));
    this.setState({ files: filesToStore });
  }

  startUploadManually = () => {
    const { files } = this.state;
    files.forEach(file => {
      this.fileUploader.startUpload(file)
    });
  }

  handleAddApplication = (
    firstName,
    lastName,
    dl,
    dlState,
    ssn,
    coFirstName,
    coLastName,
    coDl,
    coDlState,
    coSsn,
    otherResidents,
    currentIncome,
    currentHouseholdIncome,
    currentPayment,
    employer,
    supervisor,
    supervisorPhoneNo,
    verifyMethod
  ) => {
    fetch('http://localhost:8080/api/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        dl: dl,
        dlState: dlState,
        ssn: ssn,
        coFirstName: coFirstName,
        coLastName: coLastName,
        coDl: coDl,
        coDlState: coDlState,
        coSsn: coSsn,
        otherResidents: otherResidents,
        currentIncome: currentIncome,
        currentHouseholdIncome: currentHouseholdIncome,
        currentPayment: currentPayment,
        employer: employer,
        supervisor: supervisor,
        supervisorPhoneNo: supervisorPhoneNo,
        verifyMethod: verifyMethod
      })
    })
  }



  render() {
    return (
      <Container>
        <div>
          <h4>Application for Rental Property {this.props.match.params.rentalId}</h4>
          <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input type="text" onChange={this.handleTextBoxChange} name="firstName" id="firstName" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input type="text" onChange={this.handleTextBoxChange} name="lastName" id="lastName" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="dl">Driver License Number</Label>
                <Input type="text" onChange={this.handleTextBoxChange} name="dl" id="dl" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="dlState">Issuing State</Label>
                <Input type="text" onChange={this.handleTextBoxChange} name="dlState" id="dlState" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="ssn">Social Security Number</Label>
                <Input type="text" onChange={this.handleTextBoxChange} name="ssn" id="ssn" />
              </FormGroup>
            </Col>
          </Row>
          <Card>
            <CardTitle>
            If you are applying with a co-tenant, please fill out the following for the co-tenant.
            </CardTitle>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="coFirstName">First Name</Label>
                <Input type="text" onChange={this.handleTextBoxChange} name="coFirstName" id="coFirstName" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="coLastName">Last Name</Label>
                <Input type="text" onChange={this.handleTextBoxChange} name="coLastName" id="coLastName" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="coDl">Driver License Number</Label>
                <Input type="text" onChange={this.handleTextBoxChange} name="coDl" id="coDl" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="coDlState">Issuing State</Label>
                <Input type="text" onChange={this.handleTextBoxChange} name="dlState" id="dlState" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="coSsn">Social Security Number</Label>
                <Input type="text" onChange={this.handleTextBoxChange} name="coSsn" id="coSsn" />
              </FormGroup>
            </Col>
          </Row>
          </Card>
          <Row form>
            <FormGroup>
              <Label for="otherResidents">Please list all other residents</Label>
              <Input type="textarea" onChange={this.handleTextBoxChange} name="otherResidents" id="otherResidents" />
            </FormGroup>
          </Row>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="currentIncome">Current Income</Label>
                <Input type="text" onChange={this.handleTextBoxChange} name="currentIncome" id="currentIncome" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="currentHouseholdIncome">Current Household Income</Label>
                <Input type="text" onChange={this.handleTextBoxChange} name="currentHouseholdIncome" id="currentHouseholdIncome" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="currentPayment">Current Rent/Mortgage Payment</Label>
                <Input type="text" onChange={this.handleTextBoxChange} name="currentPayment" id="currentPayment" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="employer">Employer</Label>
                <Input type="text" onChange={this.handleTextBoxChange} name="employer" id="employer" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="supervisor">Supervisor</Label>
                <Input type="text" onChange={this.handleTextBoxChange} name="supervisor" id="supervisor" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="supervisorPhoneNo">Supervisor Phone Number</Label>
                <Input type="text" onChange={this.handleTextBoxChange} name="supervisorPhoneNo" id="supervisorPhoneNo" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="verifyMethod">Select how you would like your income verified.</Label>
                <Input type="select" name="verifyMethod" id="verifyMethod">
                  <option value="paystub">Upload paystub</option>
                  <option value="supervisor">Call my supervisor</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <ImageUpload />
            </Col>
          </Row>
            <Button outline color="primary" type="button" onClick={() => this.handleAddApplication(
              this.state.firstName,
              this.state.lastName,
              this.state.dl,
              this.state.dlState,
              this.state.ssn,
              this.state.coFirstName,
              this.state.coLastName,
              this.state.coDl,
              this.state.coDlState,
              this.state.coSsn,
              this.state.otherResidents,
              this.state.currentIncome,
              this.state.currentHouseholdIncome,
              this.state.currentPayment,
              this.state.employer,
              this.state.supervisor,
              this.state.supervisorPhoneNo,
              this.state.verifyMethod
            )}>Apply</Button>
          </Form>

        </div>
      </Container>
    )
  }
}


export default Apply
