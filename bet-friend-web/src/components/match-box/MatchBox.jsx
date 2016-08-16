import React from 'react'
// FlexBox imports
import {Col} from 'react-flexbox-grid/lib'

export default class MatchBox extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (<Col {...this.props}>
        <div >
          <span>Test</span>
        </div>
    </Col>)
  }
}
