import React, { Component } from 'react';
import M from 'materialize-css';
import { HashLink } from 'react-router-hash-link';

class Financing extends Component {
    render() {
        return (
            <div id="Financing">
<div className="colorsThree">

            <div class="container">
            <div class="section">
            <h2 className="swotitle">We offer the following financing for your Pc Repair in San Antonio</h2>

              <div class="row">
              <div class="col s12 m4">
                  <div class="icon-block">
                 
                    <img src="./paypal.png" width="200px" height="200px" />
         
                    <a  href="https://paypal.me/SanAntoniosWebDesign?locale.x=en_US" class="waves-effect waves-light btn">Finance with Paypal</a>
                    
           
                  </div>
                </div>
              
         
                <div class="col s12 m4">
                  <div class="icon-block">
                
                  
                    <img src="./fundinghero.png" width="200px" height="200px" />
                    <a   href="https://www.fundinghero.com/business-loans/" class="waves-effect waves-light btn">Finance with Funding Hero</a>
                 </div>
                </div>
              
                <div class="col s12 m4">
                  <div class="icon-block">
               
                    <img src="./zip.svg" width="200px" height="200px" />
                    <a href="https://start.zip.co/?pp=zipBizBasic&_ga=2.250520960.722411811.1613808814-301674048.1613808814"class="waves-effect waves-light btn">Finance with Zip money</a>
                 </div>
                </div>
         

   </div> </div></div>
   </div></div>

      );                                                                             
}
}

export default Financing;