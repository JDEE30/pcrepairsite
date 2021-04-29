import React, { Component} from 'react';
import M from 'materialize-css';
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import './App.css';



class AvailableServices extends Component {
    render() {

        gsap.to(".box", {rotation: 27, x: 100, duration: 5});

        return (

<div className="AvServComp">

<div className="box green"></div>
<div className="box orange"></div>
<div className="box grey"></div>
 </div>

      );                                                                             
}
}

export default AvailableServices;