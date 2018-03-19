import React, { Component } from 'react';

export default class LandingBlock extends Component {

  render() {
    const { children } = this.props;

    return (
        <div>
          {children}
        </div>
    );
  }
}

LandingBlock.propTypes = {
  children: React.PropTypes.element.isRequired
};
