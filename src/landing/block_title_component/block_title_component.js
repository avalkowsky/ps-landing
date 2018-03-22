import React, { Component } from 'react';

export default class LandingBlockTitle extends Component {

    render() {
      const { color, title, paddings } = this.props;

      return (
        <h6 style={{
          textAlign: 'center',
          paddingTop: paddings.top,
          paddingLeft: paddings.left,
          paddingRight: paddings.right,
          paddingBottom: paddings.bottom,
          color }}>
              <span style={{ borderBottom: `1px solid ${color}`, paddingBottom: 40 }}>
                {title}
              </span>
        </h6>
      );
    }
}

LandingBlockTitle.defaultProps = {
  color: 'white',
  paddings: { top: 50, left: 50, right: 50, bottom: 50 }
};

LandingBlockTitle.propTypes = {
  title: React.PropTypes.string.isRequired,
  color: React.PropTypes.string,
  paddings: React.PropTypes.object
};
