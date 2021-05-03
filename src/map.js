

import React, { Component } from 'react';
import M from 'materialize-css';


class Map extends Component {
    render() {
        return (
<div>

        <iframe
  width="450"
  height="250"
  frameborder="0" style="border:0"
  src="https://www.google.com/maps/embed/v1/PLACE?key={}}" allowfullscreen>
</iframe>


   </div>

      );                                                                             
}
}

export default Map;


