import React, { Component } from 'react';
import LandingBlockTitle from '../block_title_component/block_title_component';
import LandingHandwrittenText from '../handwritten_text_component/handwritten_text_component';
import { blockTitle, aboutWrittenText, aboutText } from './about_content';

export default class LandingAbout extends Component {

    render() {
        return (
            <div>
              <LandingBlockTitle title={blockTitle} color="black"/>
              <LandingHandwrittenText text={aboutWrittenText} />
              <p className="flow-text">
                {aboutText}
              </p>
              </div>
        );
    }
}
