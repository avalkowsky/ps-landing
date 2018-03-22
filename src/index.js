import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { landingTitle } from './landing/landing_seo_content';
import LandingHeader from './landing/header_component/header_component';
import LandingBlock from './landing/block_component/block_component';
import LandingStarter from './landing/starter_component/starter_component';
import LandingServices from './landing/services_component/services_component';
import LandingAbout from './landing/about_component/about_component';
import LandingCurriculum from './landing/curriculum_component/curriculum_component';
import LandingTestimonials from './landing/testimonials_component/testimonials_component';

class App extends Component {

  render() {
    const lightGrey = '#f8f8f8';

    return (
      <div>
        <Helmet>
          <title>{landingTitle}</title>
        </Helmet>
        <LandingHeader />
        <LandingStarter />
        <LandingBlock children={<LandingServices />}/>
        <LandingBlock children={<LandingAbout />} backgroundColor={lightGrey}/>
        <LandingBlock children={<LandingCurriculum />}/>
        <LandingBlock children={<LandingTestimonials />} backgroundColor={lightGrey}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
