import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import M from 'materialize-css';
import Nav from './Nav';
import Banner from './Banner';
import Services from  './Services';
import PcRepair from  './PcRepair';
import Glass from './Glass';
import AvailableServices from './AvailableServices';
import PcRepairServicesWeOffer from './PcRepairServicesWeOffer.js';
import MoreServices from './MoreServices.js';

function App() {
  return (
<div>
  <Nav />
  <Banner />
  <Services />
  <PcRepair />
  <AvailableServices />
  <PcRepairServicesWeOffer />
  <MoreServices />

</div>  
);
}



export default App;