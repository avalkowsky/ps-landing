import React, { Component } from 'react';
import Typist from 'react-typist';
import parallaxImage from './img/parallax.jpg';
import LandingBlockTitle from '../block_title_component/block_title_component';
import { blockTitle, exploreTooltip } from './starter_content';
import smoothScroll from 'smoothscroll';

export default class LandingStarter extends Component {
  constructor(props) {
    super(props);

    $(document).ready(() => {
      $('.parallax').parallax();
      $('.tooltipped').tooltip({delay: 50});
    });
  }

  smoothScrollDown(event) {
    event.preventDefault();

    smoothScroll(document.querySelector('#expandTarget'));
  }

  render() {
      return (
        <div className="row">
            <div id="pseudoParallax" style={{ backgroundImage: `url(${parallaxImage})` }}>
              <LandingBlockTitle title={blockTitle}/>
              <Typist className="blinking-container">
                <p className="flow-text">
                  I Write <b>Beautiful</b> and <b>Unmistakable</b> Text.
                </p>
              </Typist>
              <a style={{ marginTop: 40, marginBottom: 20 }}
                 className="waves-effect waves-light btn tooltipped"
                 data-position="bottom"
                 data-delay="50"
                 data-tooltip={exploreTooltip}
                 onClick={(e) => { this.smoothScrollDown(e) }}
              >explore</a>
              <div>
                <i style={{ color: 'white' }} className="tiny material-icons">expand_more</i>
              </div>
            </div>
        </div>
      );
  }
}
