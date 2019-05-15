import React, {Component} from 'react'
import FetchSingleTenant from './FetchSingleTenant'

export class Tenants extends Component {
  constructor() {
    super()
    this.state = {
      tenantid: ''
    }
  }

  componentWillMount() {
    this.setState({tenantid: this.props.match.params.tenantid})
  }

  render() {
    console.log(this.state.tenantid);
    return (
      <div>
        <FetchSingleTenant tenantid={this.state.tenantid}/>
      </div>
    )
  }
}
