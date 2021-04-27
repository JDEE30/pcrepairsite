import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import M from 'materialize-css';
import './Nav';
import './Banner';
import './Services';
import './PcRepair';
import PcRepair from './PcRepair';
function App() {
  return (
<div>
<nav>

<div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="sass.html">Home</a></li>
        <li><a href="badges.html">About</a></li>
        <li><a href="collapsible.html">Contact</a></li>
      </ul>
    </div>
</nav>

<banner>
  <div id="VideoGradient">

  <div id="videoBannerContainer">
  <video loop="true" sound="false" autoplay="true"  width="100%" height="100%" src="./Pexels Videos 2818567.mp4" type="video/mp4"></video>

<div id="Container"> 
<h1 id="BannerText" > San Antonio's PC Repair </h1>
</div>
</div>
</div>
  </banner> 

  <services>

<div class="container">
   <div class="section">

     <div class="row">
       <div class="col s12 m4">
         <div class="icon-block">
           <h2 class="center brown-text"><i class="material-icons">flash_on</i></h2>
           <h5 class="center">Super fast Computer Repairs</h5>

           <p class="light">We've been fixing computers forever. So, our experience allows us to get all repairs done with lighting fast speeds. Not only will we fix the issue in a timely manner, we can also schedule your repair in a timely manner. You won't be waiting two weeks for parts with us!</p>
         </div>
       </div>

       <div class="col s12 m4">
         <div class="icon-block">
           <h2 class="center brown-text"><i class="material-icons">group</i></h2>
           <h5 class="center">Great Customer Service</h5>

           <p class="light">We understand this process can be confusing or simply irritating. So, we're with you every step of the way, if you have any questions just let us know and we'll do our best to explain everything as simply as possible, you won't get bombarded with technical mumbo jumbo from us. We know you only care about end results.</p>
         </div>
       </div>

       <div class="col s12 m4">
         <div class="icon-block">
           <h2 class="center brown-text"><i class="material-icons">settings</i></h2>
           <h5 class="center">Super easy Computer Repair experience</h5>

           <p class="light">Drop off your laptop,desktop or phone or we can come pick it up, or even repair in house if need be. We're here to make this computer repair an easy experience for you. </p>
         </div>
       </div>
     </div>

   </div>
 </div>
</services> 

<pcrepairs>
  

<div class="container">
   <div class="section">

     <div class="row">
       <div class="col s6 m6">
         <div class="icon-block">
           <h5 class="center">Expert PC Repair</h5>

           <p class="light">No matter, how sick your computer is, we will repair it. You don't need to worry about if or when we will repair your computer. We're experienced it professionals with a combined experience of over 40 years.</p>
         </div>
       </div>


       <div class="col s6 m6">
         <div class="icon-block">
           <img src="./error colored.svg" width="80%" height="90%"></img>

         </div>
       </div>
     </div>

   </div>
 </div>
</pcrepairs> 


</div>  
);
}



export default App;