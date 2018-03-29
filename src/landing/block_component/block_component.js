import React, { Component } from 'react';

export default class LandingBlock extends Component {

  render() {
    const { children, backgroundColor, htmlId } = this.props;

    return (
      <div className="row" style={{backgroundColor}} id={htmlId}>
        <div style={{paddingTop: 50, paddingBottom: 50}} className="container">
          {children}
        </div>
      </div>
    );
  }
}

LandingBlock.defaultProps = {
  backgroundColor: 'white'
};

LandingBlock.propTypes = {
  children: React.PropTypes.element.isRequired,
  backgroundColor: React.PropTypes.string,
  htmlId: React.PropTypes.string
};
