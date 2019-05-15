import React, {Component} from 'react'
import FetchRepairs from './FetchRepairs'

export class Repairs extends Component {
  constructor() {
    super()
    this.state = {
      propertyid: '',
      address: ''
    }
  }

  componentWillMount() {
    this.setState({
      propertyid: this.props.match.params.propertyid,
      address: this.props.match.params.address
    })
  }
  render() {
    console.log(this.state.propertyid);
    return (
      <div>
        <h1>Repair Hisory</h1>
        <FetchRepairs propertyid={this.state.propertyid} address={this.state.address} />
      </div>
    )
  }
}
