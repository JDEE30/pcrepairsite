import React, { Component } from 'react';
import M from 'materialize-css';
import { HashLink } from 'react-router-hash-link';

class Nav extends Component {
  render() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
    });
  
   /* need to find options on materializecss*/
      return (

        <nav>
        <div class="nav-wrapper">
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>

          <ul id="nav-mobile" class="right hide-on-med-and-down">

           
         <li><a href="tel:+210-239-7606" button className="call" >Call us now! </a></li>
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