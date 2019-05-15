import React, {Component} from 'react'
import FetchRepairs from './FetchRepairs'

export class Repairs extends Component {
  render() {
    return (
      <div>
        <h1>Repair Hisory</h1>
        <FetchRepairs />
      </div>
    )
  }
}
