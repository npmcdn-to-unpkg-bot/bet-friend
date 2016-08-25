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
          <Table selectable={false} multiSelectable={false} style={styles.tableContainer}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
              <TableRow>
                {
                  tableFormat.map((col, i) => {
                    return (
                      <TableHeaderColumn key={i} style={col.style}>{col.title}</TableHeaderColumn>
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

const tableFormat = [
  {title: 'Pos.', style: {width: '25px'}},
  {title: 'Equipe', style: {width: '170px'}},
  {title: 'Points', style: {width: '30px'}},
  {title: 'Joué', style: {width: '30px'}},
  {title: 'Victoires', style: {width: '30px'}},
  {title: 'Nuls', style: {width: '30px'}},
  {title: 'Défaites', style: {width: '30px'}},
  {title: 'Différence', style: {width: '30px'}}
]

const styles = {
  tableContainer: {
    width: '800px',
    verticalAlign: 'middle',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  headerColumn: {
    fontSize: '15px',
    textAlign: 'center'
  }
}
