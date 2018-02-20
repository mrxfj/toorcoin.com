import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

import comingsoon from './toorcoin.png'

class App extends Component {
  render() {
    return (
      <Image src={comingsoon} fluid />
    );
  }
}

export default App;
