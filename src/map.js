import React, { Component } from 'react';
import M from 'materialize-css';
import { HashLink } from 'react-router-hash-link';

class Map extends Component {
    render() {
        return (
            <div id="Map">
<iframe class="mapframe" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=San%20An&key=&zoom=12"></iframe>
</div>
      );                                                                             
}
}

export default Map;


