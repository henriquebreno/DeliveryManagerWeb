import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../css/NavMenu.css';
import Logo from '../img/logo-icon.png';
import "@fontsource/port-lligat-sans";	
import { Speedometer2, PersonLinesFill, List, HouseFill, XLg } from 'react-bootstrap-icons';

// get our fontawesome imports
import { faTachometerAlt, faHome, faSitemap, faMapSigns, faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class NavMenu extends Component {
  displayName = NavMenu.name


render() {
    return (
		<aside className="app-sidebar" id="sidebar">
            <div className="sidebar-header">
                <a className="sidebar-brand" href="">
					<img src={Logo} alt="app logo" />
				</a>

				<span className="logo-name">DeliveryManager</span>
                <button type="button" className="sidebar-toggle"> <XLg className="fa" /></button>
			</div>
            <div className="sidebar-menu">
                <ul className="sidebar-nav">
                    <li className="" >
						<NavLink to={'/dashboard'} activeClassName="active">
                            <div className="icon"> <FontAwesomeIcon icon={faTachometerAlt} className="fa" /> </div>
                            <div className="title">Dashboard</div>
						</NavLink>						
					</li>
                    <li className="">
						<NavLink to={'/'} exact activeClassName="active">
                            <div className="icon"> <FontAwesomeIcon icon={faHome} className="fa" /> </div>
                            <div className="title">Home</div>
						</NavLink>		
					</li>

                    <li className="">
						<NavLink  to="/fetchclient" activeClassName="active">
                            <div className="icon"> <FontAwesomeIcon icon={faSitemap} className="fa" />  </div>							
                            <div className="title">Clientes</div>
						</NavLink>						
					</li>
					<li className="">
						<NavLink to="/fetchcardapio" activeClassName="active">
                            <div className="icon"> <FontAwesomeIcon icon={ faMap} className="fa" /> </div>
                            <div className="title">Cardápio</div>
						</NavLink>
					</li>


				</ul>
			</div>
		</aside>
    );
  }
}
