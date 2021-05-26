import {React, Component } from 'react';
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
 
<Footer />
   </div>


      );
}
}

export default MoreAboutOurServices; 