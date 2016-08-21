import React from 'react'
import Radium from 'radium'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {orange100, orange500, orange700} from 'material-ui/styles/colors'
// Components
import NavBar from './components/nav-bar/NavBar.jsx'

// Exemple https://github.com/callemall/material-ui-webpack-example/
// blob/25938ac6f5db94645e6ea9f24a903792d3133c5d/src/app/Main.js

@Radium
export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <NavBar />
        {this.props.children}
      </div>
    </MuiThemeProvider>
    )
  }
}

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange500,
    primary2Color: orange700,
    primary3Color: orange100
  }
}, {
  avatar: {
    borderColor: null
  },
  userAgent: navigator.userAgent
})
