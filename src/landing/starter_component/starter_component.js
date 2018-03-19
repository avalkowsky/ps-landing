import React, { Component } from 'react';
import Typist from 'react-typist';
import parallaxImage from './img/parallax.jpg';

export default class LandingStarter extends Component {
  constructor(props) {
    super(props);

    $(document).ready(() => {
      $('.parallax').parallax();
    });
  }

  render() {
      return (
        <div className="parallax-container">
          <div className="parallax">
            <img src={parallaxImage} />
            <div style={{ width: '100%', position: 'relative', marginTop: 70, textAlign: 'center' }}>
              <h6 style={{ textAlign: 'center', color: 'white', padding: 50 }}>
                <span style={{ borderBottom: '1px solid white', paddingBottom: 40 }}>
                  Content Magician
                </span>
              </h6>
              <Typist className="blinking-container">
                <p className="flow-text">
                  I Write <b>Beautiful</b> and <b>Unmistakable</b> Text.
                </p>
              </Typist>
              <a style={{ marginTop: 40, marginBottom: 20 }} className="waves-effect waves-light btn">explore</a>
              <div>
                <i style={{ color: 'white' }} className="tiny material-icons">expand_more</i>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
