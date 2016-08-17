import React from 'react'
import Radium from 'radium'

// FlexBox imports
import {Row, Grid} from 'react-flexbox-grid/lib'
// React ToolBox imports
import MatchBox from '../match-box/MatchBox.jsx'

@Radium
export default class NavBar extends React.Component {

  constructor(props) {
    super(props)
  }

  // https://facebook.github.io/react/tips/initial-ajax.html

  render() {

    return (
      <Grid fluid style={styles.appContainer}>
        <Row>
          <MatchBox type='row' xs={12} sm={4} md={3} />
          <MatchBox type='row' xs={12} sm={4} md={3} />
          <MatchBox type='row' xs={12} sm={4} md={3} />
          <MatchBox type='row' xs={12} sm={4} md={3} />
          <MatchBox type='row' xs={12} sm={4} md={3} />
          <MatchBox type='row' xs={12} sm={4} md={3} />
          <MatchBox type='row' xs={12} sm={4} md={3} />
          <MatchBox type='row' xs={12} sm={4} md={3} />
          <MatchBox type='row' xs={12} sm={4} md={3} />
          </Row>
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
