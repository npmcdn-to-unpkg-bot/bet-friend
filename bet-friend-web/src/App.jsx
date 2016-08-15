import React from 'react'
import {Button} from 'react-toolbox/lib/button'
import SuccessButton from './SuccessButton.jsx'

class App extends React.Component {
  render() {
    return <section style={{padding: 20}}>
        <Button label='Hello World!' />
        <SuccessButton label='Success!' primary raised />
      </section>
  }
}

export default App
