import React from 'react'
import Radium from 'radium'
import {Col} from 'react-flexbox-grid/lib'
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card'

@Radium
export default class MatchBox extends React.Component {

  constructor(props) {
    super(props)

    this.dummyText = 'Lorem Ipsum is simply dummy text of the printing'
  }

  render() {
    return (
    <Col {...this.props} style={styles.matchBoxContainer}>
      <Card>
        <CardHeader
          avatar='https://placeimg.com/80/80/animals'
          title='Avatar style title'
          subtitle='Subtitle here'
        />
        <CardTitle
          title='Title goes here'
          subtitle='Subtitle here'
        />
        <CardText>{this.dummyText}</CardText>
      </Card>
    </Col>
    )
  }
}

const styles = {
  matchBoxContainer: {
    marginBottom: '10px'
  }
}
