import React, { Component } from 'react';
import { author } from './footer_content';

export default class LandingFooter extends Component {

    render() {
        return (
          <footer className="page-footer" style={{paddingTop: 0}}>
            <div className="footer-copyright grey darken-4">
              <div className="container">
                © 2018 {author}
                <a className="grey-text text-lighten-4 right" href="#!">facebook</a>
              </div>
            </div>
          </footer>
        );
    }
}
