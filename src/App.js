import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";import M from 'materialize-css';
import Nav from './Nav';
import Banner from './Banner';
import Services from  './Services';
import PcRepair from  './PcRepair';
import PcRepairServicesWeOffer from './PcRepairServicesWeOffer.js';
import MoreServices from './MoreServices.js';
import LiveChat from './LiveChat.js'; 
import Prices from './Prices.js';
import Prices2 from './Prices2.js';
import Devices from './Devices.js';
import Financing from './Financing.js';
import Map from './Map.js';  
import Footer from './Footer.js';
import MoreAboutOurServices from './MoreAboutOurServices.js';
import Home from './Home';



/* Need to find new host for application to work. Current web host does not support react entirely.
They may need to upgrade their server to accomodate React Apps.  */


function App() {
  return (

<div>

  <Switch>
  <Route exact path="/" component={Home} />       
  <Route exact path="/MoreAboutOurServices" component={MoreAboutOurServices} />       
      </Switch>


</div>  



);
}



export default App;