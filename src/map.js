

import React, { Component } from 'react';
import M from 'materialize-css';


class Map extends Component {
    render() {
        return (
<iframe class="mapframe" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=San%20An&key={{}}&zoom=12"></iframe>

      );                                                                             
}
}

export default Map;


