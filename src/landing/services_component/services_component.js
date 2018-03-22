import React, { Component } from 'react';
import LandingBlockTitle from '../block_title_component/block_title_component';
import LandingHandwrittenText from '../handwritten_text_component/handwritten_text_component';
import { blockTitle, servicesWrittenText, servicesBlocksText } from './services_content';
import ServicesCart from './cart_component';

export default class LandingServices extends Component {

    render() {
        return (
            <div>
              <LandingBlockTitle title={blockTitle} color="black"/>
              <LandingHandwrittenText text={servicesWrittenText} />

              <div className="row">
                <ServicesCart description={servicesBlocksText.copywriting.text} title={servicesBlocksText.copywriting.title}/>
                <ServicesCart description={servicesBlocksText.translating.text} title={servicesBlocksText.translating.title}/>
                <ServicesCart description={servicesBlocksText.marketingStrategies.text} title={servicesBlocksText.marketingStrategies.title}/>
                <ServicesCart description={servicesBlocksText.teaching.text} title={servicesBlocksText.teaching.title}/>
                <ServicesCart description={servicesBlocksText.ux.text} title={servicesBlocksText.ux.title}/>
              </div>
            </div>
        );
    }
}
