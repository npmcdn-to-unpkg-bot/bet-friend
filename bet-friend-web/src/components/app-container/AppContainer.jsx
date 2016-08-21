import React from 'react'
import Radium from 'radium'
import {Grid} from 'react-flexbox-grid/lib'

@Radium
export default class AppContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  // https://facebook.github.io/react/tips/initial-ajax.html
  //  <MatchBox type='row' xs={12} sm={4} md={3} />

  render() {

    return (
      <Grid fluid style={styles.appContainer}>
          {this.props.children}
      </Grid>
    )
  }
}

const styles = {
  appContainer: {
    position: 'relative',
    top: '10px',
    left: '0px'
  }
}
