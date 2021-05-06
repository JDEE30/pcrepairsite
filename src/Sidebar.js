
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

class Sidebar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 350,
            outDuration: 350,
            draggable: true

           
        });
    }

    render() {
        return (
            <div className="navcolor">
                <ul id="slide-out" className="sidenav">
                    <li />
                    
                    <li>
                        <a href="#Services">Services</a>
                    </li>
                    <li>
                        <a href="#Prices">Prices</a>
                    </li>
                   
                    <li>
                        <a href="#Financing">Financing</a>
                    </li>
                    <li>
                        <a href="#Map">Contact </a>
                    </li>
                    <li><div class="divider"></div></li>
                    <li><a class="sidenav-close" href="#!">Close SideNav</a></li>
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger">
                    <i id="SideNavColor" className="material-icons">menu</i>
                </a>
            </div>
        );
    }
}

export default Sidebar;