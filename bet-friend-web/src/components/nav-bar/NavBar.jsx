import React from 'react'
import Radium from 'radium'
// React ToolBox imports
import AppBar from 'material-ui/AppBar'

@Radium
export default class NavBar extends React.Component {

  static propTypes = {
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
    <AppBar title='Title' />
    )
  }
}
