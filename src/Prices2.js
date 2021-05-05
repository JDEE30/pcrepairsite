import React, { Component } from 'react';
import M from 'materialize-css';
import { HashLink } from 'react-router-hash-link';


class Prices2 extends Component {
    render() {
        return (
<div className="colorsThree">

            <div class="container">
            <div class="section">
              <div class="row">
              <div class="col s12 m4">
                  <div class="icon-block">
                  
                    <h5 class="center">Peripheral Connections</h5>
                    <img src="./storefront colored.svg" width="250px" height="360px" />
         
                    <p class="light">This Pc Repair in San Antonio :</p>
           <p class="greenPrice"> $50.00 - $100.00 </p>
                  </div>
                </div>
              
         
                <div class="col s12 m4">
                  <div class="icon-block">
                
                    <h5 class="center">Phone Repairs</h5>
                    <img src="./e-commerce colored .svg" width="250px" height="360px" />

         
                    <p class="light">This Pc Repair in San Antonio :</p>
                    <p class="greenPrice"> $100.00 - $150.00 Plus Hardware</p>
                 </div>
                </div>
         
         
                <div class="col s12 m4">
                  <div class="icon-block">
               
                    <h5 class="center">Repair non-Starting/ slow PC's</h5>
                    <img src="./vision 2 colored .svg" width="250px" height="360px" />
         
                    <p class="light">This Pc Repair in San Antonio :</p>
                    <p class="greenPrice"> $80.00 Plus Hardware</p>
                 </div>
                </div>
         

   </div> </div></div>
   </div>

      );                                                                             
}
}

export default Prices2;