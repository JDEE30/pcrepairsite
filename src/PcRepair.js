import React, { Component } from 'react';
import M from 'materialize-css';
import { HashLink } from 'react-router-hash-link';

class PcRepair extends Component {
    render() {

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, { duration: 200 });

            var instance = M.Carousel.init({
                fullWidth: true
              });
          });
        return (

<div>
            <h2 className="swotitle">Why choose us for PC Repair in San Antonio?</h2>
            <p className="carouselPtag">Swipe right or left to see why we're the first Choice for PC Repair in San Antonio!</p>
            <div class="carousel carousel-slider">
    <a class="carousel-item" href="#one!"><img src="./expertpcrepair.PNG" style={{width: "100%",  height: "400px"}} /></a>
    <a class="carousel-item" href="#two!"><img src="./computer repair techs who care.PNG" style={{width: "100%",  height: "400px"}} /></a>
    <a class="carousel-item" href="#three!"><img src="./Live Help.PNG" style={{width: "100%",  height: "400px"}} /></a>
    <a class="carousel-item" href="#four!"><img src="./expertpcrepair.PNG" style={{width: "100%",  height: "400px"}} /></a>
    <a class="carousel-item" href="#five!"><img src="./Quick Repairs and Fast Deliveries.PNG" style={{width: "100%",  height: "400px"}} /></a>
    <a class="carousel-item" href="#five!"><img src="./Expert Communication.PNG" style={{width: "100%",  height: "400px"}} /></a>
  </div>
</div>
      );                                                                             
}
}

export default PcRepair;