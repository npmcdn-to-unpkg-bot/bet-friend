import React from 'react'
import Radium from 'radium'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table'
// Components
import TeamPosition from './team-position/TeamPosition.jsx'
// Services
import Store from '../../services/common/StoreService.jsx'
import FetchService from '../../services/common/FetchService.jsx'

@Radium
export default class LeagueTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      leagueCaption: '',
      matchday: 0,
      standing: []
    }
  }

  componentWillMount() {
    Store.dispatch({
      type: 'PAGE_TITLE',
      title: 'Classement'
    })
  }

  componentDidMount() {
    FetchService.get('http://api.football-data.org/v1/competitions/434/leagueTable').then(data => {
      console.log(data)
      this.setState({leagueCaption: data.leagueCaption , matchday: data.matchday, standing: data.standing})
    })
  }

  render() {

    return (
    <Table selectable={false} multiSelectable={false}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          {
            tableHeader.map((col, i) => {
              return (
                 <TableHeaderColumn key={i} style={styles.headerColumn}>{col}</TableHeaderColumn>
              )
            })
          }
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {
          this.state.standing.map((team, i) => {
            return (
              <TeamPosition key={i} team={team} />
            )
          })
        }
      </TableBody>
    </Table>
    )
  }
}

const tableHeader = [
  'Pos.',
  'Equipe',
  'Joué',
  'Victoires',
  'Nuls',
  'Défaites',
  'Points',
  'Différence'
]

const styles = {
  headerColumn: {
    fontSize: '15px',
    textAlign: 'center'
  }
}
