import React, { Component } from 'react';
import FileBase64 from 'react-file-base64';
import { nameLabel, companyLabel, addressLabel, messageLabel, blockTitle, mailWrittenText, attachFilesTooltip } from './mail_content';
import LandingBlockTitle from '../block_title_component/block_title_component';
import LandingHandwrittenText from '../handwritten_text_component/handwritten_text_component';

export default class LandingMail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactName: '',
      company: '',
      contactEmail: '',
      contactMessage: '',
      files: []
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  prepareAttachments() {
    return this.state.files.map(({base64, name, type}) => {
      return {
        content: base64.split(',')[1],
        filename: name,
        type
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      type: 'info',
      message: 'Sending...'
    });
    $.ajax({
      url: 'http://127.0.0.1:49452/send',
      type: 'POST',
      data: {
        'name': this.state.contactName,
        'company': this.state.company ? ` (company: ${this.state.company})` : '',
        'email': this.state.contactEmail,
        'message': this.state.contactMessage,
        'attachments': JSON.stringify(this.prepareAttachments())
      },
      cache: false,
      success: function() {
        this.setState({
          type: 'success',
          message: 'We have received your message and will get in touch shortly. Thanks!'
        });
      }.bind(this),
      error: function() {
        this.setState({
          type: 'danger',
          message: 'Sorry, there has been an error.' });
      }.bind(this)
  });
  }

  handleNameChange(event) {
    this.setState({contactName: event.target.value});
  }

  handleCompanyChange(event) {
    this.setState({company: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({contactEmail: event.target.value});
  }

  handleMessageChange(event) {
    this.setState({contactMessage: event.target.value});
  }

  getFiles(files) {
    this.setState({files})
  }

  getAttachmentComponent() {
    return (
      <div className="file-field input-field">
        <div className="waves-effect waves-light btn tooltipped"
             data-position="bottom"
             data-delay="50"
             data-tooltip={attachFilesTooltip}>
          <span>File</span>
          <FileBase64
            multiple={ true }
            onDone={ this.getFiles.bind(this) }
            />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" placeholder="Upload one or more files" />
        </div>
      </div>
    )
  }

  render() {
        return (
          <div className="row" id="mailForm">
            <LandingBlockTitle title={blockTitle} color="black"/>
            <LandingHandwrittenText text={mailWrittenText} />
            <form className="col s12" id="contactForm" method="POST" action="mailer.php" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">face</i>
                  <input id="form_name" type="text" className="validate" value={this.state.contactName}
                         onChange={this.handleNameChange}/>
                    <label htmlFor="form_name">{nameLabel}</label>
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">business</i>
                  <input id="form_company" type="text" className="validate" value={this.state.company}
                         onChange={this.handleCompanyChange}/>
                    <label htmlFor="form_company">{companyLabel}</label>
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">contact_mail</i>
                  <input id="form_email" type="email" className="validate" value={this.state.contactEmail}
                         onChange={this.handleEmailChange}/>
                  <label htmlFor="form_email">{addressLabel}</label>
                </div>
              </div>
              <div className="row">
                {this.getAttachmentComponent()}
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="form_msg" className="materialize-textarea" value={this.state.contactMessage}
                            onChange={this.handleMessageChange}/>
                  <label htmlFor="form_msg">{messageLabel}</label>
                </div>
              </div>
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </form>
          </div>
        );
    }
}
