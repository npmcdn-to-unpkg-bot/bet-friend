import React from 'react'
import Radium from 'radium'
import {Col, Row} from 'react-flexbox-grid/lib'
import {TableRow, TableRowColumn} from 'material-ui/Table'

@Radium
export default class TeamPosition extends React.Component {

  propTypes: {
    children: React.PropTypes.node,
    team: React.PropTypes.object.isRequired,
    format: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TableRow selectable={false}>
        <TableRowColumn style={styles.pos}>{this.props.team.position}</TableRowColumn>
        <TableRowColumn style={styles.team}>
          <Row middle='xs'>
            <Col xs={2}><img src={this.props.team.crestURI} alt={this.props.team.teamName} style={styles.flag}/></Col>
            <Col xs={10}><span style={styles.height}>{this.props.team.teamName}</span></Col>
          </Row>
        </TableRowColumn>
        <TableRowColumn style={styles.other}>{this.props.team.points}</TableRowColumn>
        <TableRowColumn style={styles.other}>{this.props.team.playedGames}</TableRowColumn>
        <TableRowColumn style={styles.other}>{this.props.team.wins}</TableRowColumn>
        <TableRowColumn style={styles.other}>{this.props.team.draws}</TableRowColumn>
        <TableRowColumn style={styles.other}>{this.props.team.losses}</TableRowColumn>
        <TableRowColumn style={styles.other}>
          <span style={[this.props.team.goalDifference > 0 && styles.positive,
            this.props.team.goalDifference < 0 && styles.negative]}>{this.props.team.goalDifference}</span>
        </TableRowColumn>
      </TableRow>
    )
  }
}

const styles = {
  flag: {
    width: '30px',
    height: '30px',
    paddingRight: '5px'
  },
  height: {
    height: '30px',
    lineHeight: '30px',
    textAlign: 'center',
    marginLeft: '10px'
  },
  pos: {
    textAlign: 'center',
    width: '25px'
  },
  team: {
    width: '170px'
  },
  other: {
    textAlign: 'center',
    width: '30px'
  },
  positive: {
    color: 'green'
  },
  negative: {
    color: 'red'
  }
}
