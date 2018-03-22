import React, { Component } from 'react';

export default class ServicesCart extends Component {

    render() {
      const { icon, title, description } = this.props;

        return (
          <div className="col m4 s4">
            <div className="center promo promo-example">
              {icon && <i className="material-icons">{icon}</i>}
              <p className="promo-caption">{title}</p>
              <p className="light center">{description}</p>
            </div>
          </div>
        );
    }
}

ServicesCart.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string
};
