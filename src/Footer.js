import React, { Component } from 'react';
import M from 'materialize-css';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
class Footer extends Component {
    render() {

        return (

<footer id="Footer" class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">San Antonio's Computer Repair</h5>
                <p class="grey-text text-lighten-4">San Antonio's Computer Repair is the innovative Leader in Computer Repairs in San Antonio.  We're a fully remote company Located in San Antonio. We can come to you or you can contact us for our address to drop off your device.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Helpfull links</h5>
                <ul>

 
                  <li><a href="#Services">Services</a></li>    
               
                  <li><a href="#Prices">Prices</a></li>    
                  
                  <li><a href="#Financing">Financing</a></li>    
       
                 <li>
                     <a href="tel: 210-762-9415">210 - 762 - 9415</a></li> 
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            <div>San Antonio's Computer Repair {(new Date().getFullYear())}</div>
           
            </div>
          </div>
        </footer>
            
      );                                                                             
}
}

export default Footer;

