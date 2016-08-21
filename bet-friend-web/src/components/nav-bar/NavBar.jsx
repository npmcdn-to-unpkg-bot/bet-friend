import React from 'react'
import Radium from 'radium'
// React ToolBox imports
import AppBar from 'material-ui/AppBar'
// Services
import Store from '../../services/common/StoreService.jsx'

@Radium
export default class NavBar extends React.Component {

  static propTypes = {
    page: React.PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      page: ''
    }

    Store.subscribe(() => {
      this.setState({page: Store.getState().pageTitle})
      //console.log(Store.getState())
    })

  }

  render() {
    return (
    <div>
      <AppBar title={this.state.page} />
    </div>
    )
  }
}
