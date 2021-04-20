import React, { Component } from 'react';
import M from 'materialize-css';

class Nav extends Component {
  render() {
      return (
<Nav>
    <div class="nav-wrapper purple">
     
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Home</a></li>
        <li><a href="badges.html">About</a></li>
        <li><a href="collapsible.html">Contact</a></li>
      </ul>
    </div>
  </Nav> 
      );
}
}

export default Nav; 