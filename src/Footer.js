

import React, { Component } from 'react';
import M from 'materialize-css';


class Footer extends Component {
    render() {

        return (


            

<footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">San Antonio's Computer Repair</h5>
                <p class="grey-text text-lighten-4">San Antonio's Computer Repair is the innovative Leader in Computer Repairs in San Antonio.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Helpfull links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#map.js">We're a remote Company</a></li>
                  <li><a class="grey-text text-lighten-3" href="#Pricing">Pricing</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            <div>San Antonio's Computer Repair {(new Date().getFullYear())}</div>
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
            
      );                                                                             
}
}

export default Footer;

