import React, { Component } from 'react';

export default class LandingHandwrittenText extends Component {

    render() {
      const { text } = this.props;
        return (
            <h4 className="handwritten">{text}</h4>
        );
    }
}

LandingHandwrittenText.propTypes = {
  text: React.PropTypes.string.isRequired
};
