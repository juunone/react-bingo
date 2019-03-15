import React, { Component, Fragment } from 'react';
import '../sass/main.scss';

import Bingo from './Bingo';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Bingo />
      </Fragment>
    );
  }
}

export default App;
