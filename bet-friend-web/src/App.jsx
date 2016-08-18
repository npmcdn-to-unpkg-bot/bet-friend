import React from 'react'
import Radium from 'radium'
// Material imports
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {orange100, orange500, orange700} from 'material-ui/styles/colors'
// Project imports
import NavBar from './components/nav-bar/NavBar.jsx'
import AppContainer from './components/app-container/AppContainer.jsx'
import AppCss from './App.scss'

// Exemple https://github.com/callemall/material-ui-webpack-example/blob/25938ac6f5db94645e6ea9f24a903792d3133c5d/src/app/Main.js

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
        <AppContainer />
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
