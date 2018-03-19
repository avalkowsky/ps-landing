import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LandingHeader from './landing/header_component/header_component';
import LandingBlock from './landing/block_component/block_component';
import LandingStarter from './landing/starter_component/starter_component';

class App extends Component {
  render() {
    return (
      <div>
        <LandingHeader />
        <LandingBlock children={<LandingStarter />}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
