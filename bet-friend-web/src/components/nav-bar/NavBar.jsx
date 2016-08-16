import React from 'react'
// FlexBox imports
import {Grid, Row, Col} from 'react-flexbox-grid/lib'
// React ToolBox imports
import AppBar from 'react-toolbox/lib/app_bar'
// Proejct imports
import NavBarCss from './NavBar.scss'

export default class NavBar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
    <AppBar fixed flat className={NavBarCss.NarBar}>
      <Grid className={NavBarCss.NarBarGrid} >
        <Row end='xs' className={NavBarCss.NarBarGrid}>
          <Col xs={12}>
            <a href='/home'>React Toolbox Docs</a>
          </Col>
        </Row>
      </Grid>
    </AppBar>
    )
  }
}
