import React, { Component } from 'react';
import { educationLabel, experienceLabel, eductionBlocks, experienceBlocks } from './curriculum_content';
import LandingBlockTitle from '../block_title_component/block_title_component';

export default class LandingCurriculum extends Component {
    renderBlock(content) {
      return (
        <div key={content.label} className="curriculum-block">
          <h5>
            {content.label}
          </h5>
          <h6 style={{fontWeight: 'bold'}}>
              {content.time}
          </h6>
          <p className="flow-text">
            {content.text}
          </p>
          <h6>
            {content.where}
          </h6>
        </div>
      );
    }

    render() {
      const educationColumn = eductionBlocks.map(this.renderBlock);
      const experienceColumn = experienceBlocks.map(this.renderBlock);
      const paddings = {top: 0, right: 50, bottom: 100, left: 50};

        return (
            <div className="center row">
              <div className="col s12 m6">
                <i className="medium material-icons">school</i>
                <LandingBlockTitle title={educationLabel} color="black" paddings={paddings} />
                {educationColumn}
              </div>
              <div className="col s12 m6">
                <i className="medium material-icons">business_center</i>
                <LandingBlockTitle title={experienceLabel} color="black" paddings={paddings}/>
                {experienceColumn}
              </div>
            </div>
        );
    }
}
