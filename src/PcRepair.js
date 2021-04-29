import React, { Component } from 'react';
import M from 'materialize-css';

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

            <div class="carousel carousel-slider">
    <a class="carousel-item" href="#one!"><img src="./expertpcrepair.PNG" style={{width: "100%",  height: "400px"}} /></a>
    <a class="carousel-item" href="#two!"><img src="./computer repair techs who care.PNG" style={{width: "100%",  height: "400px"}} /></a>
    <a class="carousel-item" href="#three!"><img src="./Live Help.PNG" style={{width: "100%",  height: "400px"}} /></a>
    <a class="carousel-item" href="#four!"><img src="./expertpcrepair.PNG" style={{width: "100%",  height: "400px"}} /></a>
    <a class="carousel-item" href="#five!"><img src="./Quick Repairs and Fast Deliveries.PNG" style={{width: "100%",  height: "400px"}} /></a>
    <a class="carousel-item" href="#five!"><img src="./Expert Communication.PNG" style={{width: "100%",  height: "400px"}} /></a>
  </div>

      );                                                                             
}
}

export default PcRepair;