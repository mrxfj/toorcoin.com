import React, { Component } from 'react'
import { Container, Image } from 'semantic-ui-react'

import comingsoon from './toorcoin.png'

class App extends Component {
  render() {
    return (
      <Container>
        <Image src={comingsoon} fluid />
      </Container>
    );
  }
}

export default App;
