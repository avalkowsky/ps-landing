import React, { Component } from 'react';

export default class LandingTestimonialBox extends Component {

    render() {
      const { name, jobTitle, testimonial } = this.props;
        return (
            <div style={{textAlign: 'center'}} className="col s6 m4 carousel-item">
              <h5>{name}</h5>
              <h6>{jobTitle}</h6>
              <i className="material-icons dot-grey">lens</i>
              <p className="flow-text">
                {testimonial}
              </p>
            </div>
        );
    }
}

LandingTestimonialBox.propTypes = {
  name: React.PropTypes.string.isRequired,
  jobTitle: React.PropTypes.string.isRequired,
  testimonial: React.PropTypes.string.isRequired
};
