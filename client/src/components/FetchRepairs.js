import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  Container,
  ButtonGroup,
  Button} from 'reactstrap'

class FetchRepairs extends Component {
  constructor() {
    super()
    this.state = {
      repairs: []
    }
  }

  componentDidMount() {
    let url = 'http://localhost:8080/api/repairs'
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json.repairList)
      console.log(parseInt(this.props.propertyid,10));
      let repairs = json.repairList.map((repair) => {
        if(repair.propertyid == parseInt(this.props.propertyid,10)) {
          return (
            <Container key = {repair.id}>
              <div>
                <li>
                <h3>{this.props.address}</h3>
                <h3>{repair.title}</h3>
                <h5>{repair.description}</h5>
                </li>
              </div>
            </Container>
          )
        }
      })
      this.setState({repairs: repairs})
    })
  }

  render() {
    return (
      <div>
        <ul>{this.state.repairs}</ul>
      </div>
    )
  }
}

export default withRouter(FetchRepairs)
