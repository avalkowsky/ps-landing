import React, { Component } from 'react';
//import Typist from 'react-typist';
import parallaxImage from './img/parallax.jpg';
import LandingBlockTitle from '../block_title_component/block_title_component';
import { blockTitle } from './starter_content';

export default class LandingStarter extends Component {
  constructor(props) {
    super(props);

    $(document).ready(() => {
      $('.parallax').parallax();
      $('.tooltipped').tooltip({delay: 50});
    });
  }

  render() {
      return (
        <div className="parallax-container">
          <div className="parallax">
            <img src={parallaxImage} />
            <div style={{ width: '100%', position: 'relative', marginTop: 70, textAlign: 'center' }}>
              <LandingBlockTitle title={blockTitle}/>
              {/*<Typist className="blinking-container">*/}
                {/*<p className="flow-text">*/}
                  {/*I Write <b>Beautiful</b> and <b>Unmistakable</b> Text.*/}
                {/*</p>*/}
              {/*</Typist>*/}
              <a style={{ marginTop: 40, marginBottom: 20 }}
                 className="waves-effect waves-light btn tooltipped"
              >explore</a>
              <div>
                <i style={{ color: 'white' }} className="tiny material-icons">expand_more</i>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
