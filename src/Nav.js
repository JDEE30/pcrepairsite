import React, { Component } from 'react';
import M from 'materialize-css';
import { HashLink } from 'react-router-hash-link';

class Nav extends Component {
  render() {
      return (

        <nav>
        <div class="nav-wrapper">
        
          <ul id="nav-mobile" class="right hide-on-med-and-down">
           
            <li><a href="#Services">Services</a></li>
            <li><a href="#Prices">Prices</a></li>
            <li><a href="#Financing">Financing</a></li>
            <li><a href="#Footer">Contact</a></li>
          </ul>
        </div>
      </nav>
            
 
      );
}
}

export default Nav; 