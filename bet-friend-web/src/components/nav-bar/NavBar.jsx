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
    <AppBar style={styles.navBar} title='Title' />
    )
  }
}

const styles = {
  navBar: {
    background: '#FF851B'
  }
}
