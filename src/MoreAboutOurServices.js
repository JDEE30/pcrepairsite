import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';


/*
import M from 'materialize-css';
import { HashLink } from 'react-router-hash-link';
class Nav extends Component {   */
    
    class MoreAboutOurServices extends Component {
        render() {

            return (
<div>
    <Nav />
 
    <div className="colors">

<div class="container">
   <div class="section">
<h2 className="swotitle">More about our PC Repair Services in San Antonio</h2>
     <div class="row">
       <div class="col s12 m4">
         <div class="icon-block">

           <h5 class="center">Virus Removal/Windows Unlock</h5>
           <img src="./undraw_Secure_server_re_8wsq.svg" width="250px" height="360px" />
           <p class="light">This is a highly sought after PC Repair in San Antonio. When we do this PC Repair in San Antonio or any other place what we basically do, is first off we need to get your location. Are we doing a PC Repair in San Antonio, are we doing the repair in our shop? Do you need us to do the repair at your residential or business address?
           After we get this information, then we can get to work.</p>

            <h5 class="center1">What is a Virus Removal or windows unlock Repair?</h5>
            <p class="light1">This PC Repair in San Antonio or surrounding areas entials several things. Assuming you have a virus or are locked out of your device we would take the following steps for this pc repair. </p>

            <ol class="light1"><li>We'll need phsyical access to your device.</li>
            <li>We will need to run some of our programs on your device to remove any viruses or to unlock your device.</li>
            <li>If step 2 does not work, we will either need to remove the Viruses manually or "Force" our way into windows manaully.</li>
            <li>If step four does not work and your data can not be recovered we will provide you with a fresh install of windows and a new HDD/SDD/NVME for this PC repair in San Antonio.</li>
            <li>this PC repair in San Antonio normally can be done in 30 minutes to an hour after parts are sourced and the repair time can vary depending on the speed of your device.</li>          
            </ol>
          </div>
       </div>

       <div class="col s12 m4">
         <div class="icon-block">
           <h5 class="center">PC Screeen Repair/Laptop/Desktop</h5>
           <img src="./undraw_image_viewer_wxce.svg" width="250px" height="360px" />
           <p class="light">Screen Repair is a very common PC repair in San Antonio. Screen Repair is such a common PC repair in San Antonio, that we have a dedicated team just for doing this PC repair in San Antonio, We have hundreds of screens available to get started on your PC repair in San Antonio right away! So, if you need a PC Repair in San Antonio you're at the right place!</p>
        
           <h5 class="center1">What is a PC Screeen Repair/Laptop/Desktop PC Repair?  </h5>
            <p class="light1">This PC Repair in San Antonio or surrounding areas entials several things. Assuming you have a cracked or broken screen/keyboard/usbport/etc on your device we would take the following steps for this pc repair. </p>
         
            <ol class="light2"><li>We'll need phsyical access to your device.</li>
            <li>We will need to source parts depending on the device we normally only care parts for phone screen repairs</li>
            <li>Once parts are sourced either by us or by the customer, we would begin the  PC repair in San Antonio</li>
            <li>this PC repair in San Antonio normally can be done in 30 minutes to an hour after parts are sourced</li>

             </ol>
         </div>
       </div>

       <div class="col s12 m4">
         <div class="icon-block">
           <h5 class="center">Operating System Upgrades/Hardware Upgrades</h5>
           <img ClassName="windows" src="./undraw_windows_q9m0.svg" width="250px" height="330px"/>
           <p class="light">If you need a PC Repair in San Antonio, spefically, a Operating System upgrade/Hardware Upgrade, then you're at the right PC repair shop!  Every few years all of San Antonio, and the world updates their operating systems/Hardware, whether that's from windows 7 to windows 8, or windows 8 to windows 10 and beyond we got you covered, because doing PC Repairs in San Antonio is what we're all about!</p>
           <h5 class="center2">What are Operating System Upgrades/Hardware Upgrade Repairs?  </h5>
            <p class="light1">This PC Repair in San Antonio or surrounding areas entials several things. Assuming you need a new version of windows/mac/linux or new ram, hard drive space, etc on your device we would take the following steps for this pc repair. </p>
         
            <ol class="light2"><li>We'll need phsyical access to your device.</li>
            <li>We will need to source parts depending on the device we normally have hard drives(hdd/ssd/nvme) on hand</li>
            <li>Once parts are sourced either by us or by the customer, we would begin the PC repair in San Antonio</li>
            <li>this PC repair in San Antonio normally can be done in 30 minutes to an hour depending on the current speed of your device after parts are sourced</li>
             </ol>
        
         </div>
       </div>       
   </div> </div> </div>
</div>




 <div class="container">
            <div class="section">
              <div class="row">
              <div class="col s12 m4">
                  <div class="icon-block">
                  
                    <h5 class="center">Peripheral Connections</h5>
                    <img src="./storefront colored.svg" width="250px" height="360px" />
         
                    <p class="light">Part of doing a PC Repair In San Antonio, is making sure our customers are able to use all different peripheral connections on their devices. So when we're doing a Pc Repair, we'll make sure your speakers, mouses, keyboards and other devices are connecting to your laptop or desktop. Remember, whether you need a PC Repair in San Antonio , or in a surrounding area, give us a call! </p>
                
                    <h5 class="center1">What is a Peripheral Connection PC Repair?  </h5>
            <p class="light1">This PC Repair in San Antonio or surrounding areas entials several things. Normally, you would be having issues connecting peripherals(keyboards, mice, speakers, printers, cash registers, etc)to one or more of your devices to qualify for this pc repair. </p>
         
            <ol class="light1"><li>We'll need phsyical access to your device.</li>
            <li>We will need to source software/parts (you may be missing software or proper physical connections may need replacing)</li>
            <li>Once parts are sourced either by us or by the customer, we would begin the PC repair in San Antonio</li>
            <li>this PC repair in San Antonio normally can be done in 10-15 minutes depending on the current speed of your device after parts/softwares are sourced</li>
             </ol>
                  </div>
                </div>
              
         
                <div class="col s12 m4">
                  <div class="icon-block">
                
                    <h5 class="center">Phone Repairs</h5>
                    <img src="./e-commerce colored .svg" width="250px" height="360px" />

         
                    <p class="light">One of our greatest pleasures when we're called about doing a PC Repair In San Antonio, is also doing phone repairs! We work with all different types of devices including android phones and current and previous versions of Iphones. So even if you don't need a PC repair in San Antonio, just remember we also fix Phones!</p>
                
                    <h5 class="center3">What is Phone Repair?  </h5>
            <p class="light1">This phone/PC Repair in San Antonio or surrounding areas entials several things. This phone/PC repair in San Antonio normally entails us replacing a screen on your phone, replacing ports on the phone, unlocking your phone or simply fixing a software issue that does not allow your phone to start.</p>
         
            <ol class="light1"><li>We'll need phsyical access to your device.</li>
            <li>We will need to source software/parts (you may be missing software or proper physical connections may need replacing)</li>
            <li>Once parts are sourced either by us or by the customer, we would begin the phone/PC repair in San Antonio</li>
            <li>this phone/PC repair in San Antonio normally can be done in 30-60 minutes depending on the current speed of your device after parts/softwares are sourced</li>
             </ol>
                  </div>
                
                </div>
         
         
                <div class="col s12 m4">
                  <div class="icon-block">
               
                    <h5 class="center">Repair non-Starting PC's</h5>
                    <img src="./vision 2 colored .svg" width="250px" height="360px" />
         
                    <p class="light">So unfortunately, as we're doing a PC Repair in San Antonio, We come accross a few non Starting PC's. Sometimes this means, you may need some new hardware, sometimes we can fix the hardware or software you have, it all depends on the issue. Nonetheless, fixing your non-strating Pc is exactly why we're here! So, if you need a PC Repair In San Antonio, and your PC just won't boot, give us a call! </p>
                 
                    <h5 class="center1">What is a non-Starting PC repair?  </h5>
            <p class="light1">This PC Repair in San Antonio or surrounding areas entials several things. This PC repair in San Antonio normally entails us installing software on your pc or replacing your hdd/sdd/nvme which would fix a software/hardware issue that does not allow your phone to start.</p>
         
            <ol class="light1"><li>We'll need phsyical access to your device.</li>
            <li>We will need to source software/parts (you may be missing software or proper physical connections may need replacing)</li>
            <li>Once parts are sourced either by us or by the customer, we would begin the c repair in San Antonio</li>
            <li>this PC repair in San Antonio normally can be done in 30-60 minutes depending on the current speed of your device after parts/softwares are sourced</li>
             </ol>
                  </div>
                   </div>
         
          
   </div> </div></div>
<Footer />
   </div>


      );
}
}

export default MoreAboutOurServices; 