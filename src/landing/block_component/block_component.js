import React, { Component } from 'react';

export default class LandingBlock extends Component {

  render() {
    const { children, backgroundColor } = this.props;

    return (
      <div className="row" style={{backgroundColor}}>
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
  backgroundColor: React.PropTypes.string
};
