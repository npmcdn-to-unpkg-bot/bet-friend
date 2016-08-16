import React from 'react'
// FlexBox imports
import {Row} from 'react-flexbox-grid/lib'
// React ToolBox imports
import MatchBox from '../match-box/MatchBox.jsx'
// Proejct imports
import AppContainerCss from './AppContainer.scss'

export default class NavBar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className={AppContainerCss.AppContainer}>
        <Row>
          <MatchBox type='row' xs={12} sm={3} md={2} lg={1} />
          <MatchBox type='row' xs={6} sm={6} md={8} lg={10} />
          <MatchBox type='row' xs={6} sm={3} md={2} lg={1} />
        </Row>
        <Row>
          <MatchBox type='row' xs={12} sm={3} md={2} lg={1} />
          <MatchBox type='row' xs={12} sm={9} md={10} lg={11} />
        </Row>
        <Row>
          <MatchBox type='row' xs={10} sm={6} md={8} lg={10} />
          <MatchBox type='row' xs={2} sm={6} md={4} lg={2} />
        </Row>
      </div>
    )
  }
}
