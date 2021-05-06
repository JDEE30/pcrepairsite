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
import LiveChat from './LiveChat.js';
import Prices from './Prices.js';
import Prices2 from './Prices2.js';
import Devices from './Devices.js';
import Financing from './Financing.js';
import Map from './Map.js';  
import Footer from './Footer.js';
import Sidebar from './Sidebar.js';





function App() {
  return (

<div>
  <Nav />
  <Sidebar />
  <Banner />
  <Services />
  <AvailableServices />
  <PcRepairServicesWeOffer />
  <MoreServices />
  <LiveChat />
  <Prices />
  <Prices2 />
  <Devices />
  <Financing />
  <Map />
  <Footer />


</div>  


);
}



export default App;