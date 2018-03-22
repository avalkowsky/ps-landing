import React, { Component } from 'react';
import LandingTestimonialBox from './testimonial_box';
import LandingBlockTitle from '../block_title_component/block_title_component';
import LandingHandwrittenText from '../handwritten_text_component/handwritten_text_component';
import { blockTitle, handwrittenText, testimonialsText } from './testimonials_content';

export default class LandingTestimonials extends Component {
  constructor(props) {
    super(props);

    $(document).ready(() => {
      $('.carousel').carousel();
    });
  }

  changeTestimonial(direction) {
    $('.carousel').carousel(direction);
  }

  render() {
    const testimonials = testimonialsText.map((props) => {
      return <LandingTestimonialBox
                key={props.name}
                {...props}
              />;
    });
      return (
          <div className="row">
            <LandingBlockTitle title={blockTitle} color="black"/>
            <LandingHandwrittenText text={handwrittenText} />
            <div className="carousel" style={{height: 340}}>
              {testimonials}
            </div>
            <div className="center">
              <i className="testimonial-icon small material-icons" onClick={() => this.changeTestimonial('next')}>chevron_left</i>
              <i className="testimonial-icon small material-icons" onClick={() => this.changeTestimonial('prev')}>chevron_right</i>
            </div>
          </div>
      );
  }
}
