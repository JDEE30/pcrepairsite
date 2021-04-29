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

function App() {
  return (
<div>
  <Nav />
  <Banner />
  <Services />
  <PcRepair />
  <AvailableServices />

</div>  
);
}



export default App;