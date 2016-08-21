import React from 'react'
import Radium from 'radium'
import {groupBy, map} from 'lodash'
import {Row} from 'react-flexbox-grid/lib'
// Components
import MatchBox from './match-box/MatchBox.jsx'
// Services
import Store from '../../services/common/StoreService.jsx'
import FetchService from '../../services/common/FetchService.jsx'

@Radium
export default class Calendar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      matchdays: []
    }
  }

  componentWillMount() {
    Store.dispatch({
      type: 'PAGE_TITLE',
      title: 'Calendrier'
    })
  }

  componentDidMount() {
    FetchService.get('http://api.football-data.org/v1/competitions/434/fixtures').then(data => {
      this.setState({'matchdays': groupBy(data.fixtures, 'matchday')})
    })
  }

  render() {

    return (
    <Row>
    {
      map(this.state.matchdays, matchday => {
        //console.log(matchday[0])
        return <MatchBox key={matchday[0].matchday} type='row' xs={12} sm={6} md={4} />
      })
    }
    </Row>
    )
  }

}
