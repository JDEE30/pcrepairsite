import React, { Component } from 'react';
import M from 'materialize-css';

class Nav extends Component {
  render() {
      return (

        <nav>
        <div class="nav-wrapper">
        
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Home</a></li>
            <li><a href="badges.html">Services</a></li>
            <li><a href="collapsible.html">Prices</a></li>
            <li><a href="collapsible.html">Contact</a></li>
          </ul>
        </div>
      </nav>
            
 
      );
}
}

export default Nav; 