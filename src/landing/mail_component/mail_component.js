import React, { Component } from 'react';
import { nameLabel, companyLabel, addressLabel, messageLabel, blockTitle, mailWrittenText } from './mail_content';
import LandingBlockTitle from '../block_title_component/block_title_component';
import LandingHandwrittenText from '../handwritten_text_component/handwritten_text_component';

export default class LandingMail extends Component {

    render() {
        return (
          <div className="row" id="mailForm">
            <LandingBlockTitle title={blockTitle} color="black"/>
            <LandingHandwrittenText text={mailWrittenText} />
            <form className="col s12" id="contactForm" method="POST" action="mailer.php" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">face</i>
                  <input id="icon_prefix" type="text" className="validate" />
                    <label htmlFor="icon_prefix">{nameLabel}</label>
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">business</i>
                  <input id="icon_telephone" type="tel" className="validate" />
                    <label htmlFor="icon_telephone">{companyLabel}</label>
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">contact_mail</i>
                  <input id="icon_telephone" type="tel" className="validate" />
                  <label htmlFor="icon_telephone">{addressLabel}</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="textarea1" className="materialize-textarea"></textarea>
                  <label htmlFor="textarea1">{messageLabel}</label>
                </div>
              </div>
            </form>
          </div>
        );
    }
}
