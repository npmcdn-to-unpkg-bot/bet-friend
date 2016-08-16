import React from 'react'
// FlexBox imports
import {Grid} from 'react-flexbox-grid/lib'

// Project imports
import NavBar from './components/nav-bar/NavBar.jsx'
import AppContainer from './components/app-container/AppContainer.jsx'
import AppCss from './App.scss'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
    <Grid fluid>
      <NavBar />
      <AppContainer />
  </Grid>
  )
  }
}
