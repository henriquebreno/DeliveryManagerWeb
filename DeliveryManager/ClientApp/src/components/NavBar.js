import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../css/NavBar.css'
import Logo from '../img/logo-icon.png';
import "@fontsource/port-lligat-sans";	
import { Speedometer2, PersonLinesFill, List, HouseFill } from 'react-bootstrap-icons';

// get our fontawesome imports
import { faDesktop, faMobile, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class NavBar extends Component {
    displayName = NavBar.name


render() {
    return (
            <nav className="navbar navbar-default" id="navbar">
                <div className="container-fluid">
                    <div className="navbar-collapse collapse in">
                        <ul className="nav navbar-nav navbar-mobile">
                            <li>
                            <button type="button" className="sidebar-toggle"> <List className="fa fa-bars"/> </button>
                            </li>
                            <li className="logo"> <a className="navbar-brand" href="#">DeliveryManager</a></li>
                            <li>
                                <button type="button" className="navbar-toggle">

                                    <img className="profile-img" src="" />
                                </button>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-left">
                            <li className="navbar-title">DeliveryManager</li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                        <a href="http://viavilab.com/codecanyon/restaurant_script_demo/" target="_blank" style={{
                            fontSize: "14px", color: "#FFF", border: "1px solid rgba(255, 255, 255, 0.7)", padding: "8px 12px", borderRadius: "2px", marginRight: "20px"
                        }} >
                            <i className="fa fa-desktop" style={{ paddingRight: "6px" }}>
                                <FontAwesomeIcon icon={faMobileAlt} className="fa" />
                            </i> 
                                Visit Website
                        </a>

                            <li className="dropdown profile"> <a href="#" className="dropdown-toggle" data-toggle="dropdown">

                                <img className="profile-img" src="" />

                                <div className="title">Profile</div>
                            </a>
                                <div className="dropdown-menu">
                                    <div className="profile-info">
                                        <h4 className="username">Admin</h4>
                                    </div>
                                    <ul className="action">
                                        <li><a href="http://viavilab.com/codecanyon/restaurant_script_demo/admin/profile">Profile</a></li>
                                        <li><a href="http://viavilab.com/codecanyon/restaurant_script_demo/admin/logout" className="btn_logout btn_top_action">Logout</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
    );
  }
}
