import React, {Component} from 'react'
import FetchApplications from './FetchApplications'

export class Applications extends Component {
  render() {
    return (
      <div>
        <h1>All Applications</h1>
        <FetchApplications />
      </div>
    )
  }
}
