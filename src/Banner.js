import React, { Component } from 'react';
import M from 'materialize-css';

class Banner extends Component {
  render() {
      return (

<div id="VideoGradient">

<div id="videoBannerContainer">
<video loop="true" sound="false" autoplay="true"  width="100%" height="100%" src="./Pexels Videos 2818567.mp4" type="video/mp4"></video>

<div id="Container"> 
<h1 id="BannerText" > San Antonio's PC Repair </h1>
</div>
</div>
</div>

   );
}
}

export default Banner; 