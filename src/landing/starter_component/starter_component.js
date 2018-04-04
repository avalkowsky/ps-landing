import React, { Component } from 'react';
import Typist from 'react-typist';
import smoothScroll from 'smoothscroll';
import parallaxImage from './img/parallax.jpg';
import LandingBlockTitle from '../block_title_component/block_title_component';
import { blockTitle, exploreTooltip, liveHandwrittenText } from './starter_content';

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
                  {liveHandwrittenText}
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
