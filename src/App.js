import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import M from 'materialize-css';
import './Nav';
import './Banner';
import './Services';

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
<h1 > San Antonio's PC Repair </h1>
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
           <h5 class="center">Fucking Lighting Fast Games</h5>

           <p class="light">These Games are fucking Fast loading.</p>
         </div>
       </div>

       <div class="col s12 m4">
         <div class="icon-block">
           <h2 class="center brown-text"><i class="material-icons">group</i></h2>
           <h5 class="center">Great Fucking Experience</h5>

           <p class="light">Have a great fucking time playing these fucking games. Best fucking time of your life.</p>
         </div>
       </div>

       <div class="col s12 m4">
         <div class="icon-block">
           <h2 class="center brown-text"><i class="material-icons">settings</i></h2>
           <h5 class="center">Easy as fuck to figure out.</h5>

           <p class="light">Great Fucking user experience with these fucking games.</p>
         </div>
       </div>
     </div>

   </div>
 </div>
</services> 
  

</div>  
);
}



export default App;