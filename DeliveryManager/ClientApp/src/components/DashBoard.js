import React, { Component } from 'react';
import '../css/dashboard.css';

// get our fontawesome imports
import { faCartArrowDown, faBars, faUndo, faGift, faMap, faUser, faUserFriends, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export class DashBoard extends Component {
    displayName = DashBoard.name

  render() {
    return (
        <div class="pcoded-content">
            <div class="pcoded-inner-content">
                <div class="main-body">
                    <div class="page-wrapper">

                        <div class="row card_item_block" style={{paddingLeft: "30px",paddingRight: "30px"}}>



                            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <a href="http://viavilab.com/codecanyon/restaurant_script_demo/admin/menu" title="6" class="card card-banner card-pink-light">
                                    <div class="card-body">
                                        <i class="icon fa fa-bars fa-4x ">
                                            <FontAwesomeIcon icon={faCartArrowDown} className="fa" />                                          
                                        </i>
                                        <div class="content">
                                            <div class="title">Menu</div>
                                            <div class="value"><span class="sign"></span>6</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <a href="http://viavilab.com/codecanyon/restaurant_script_demo/admin/product" title="22" class="card card-banner card-orange-light">
                                    <div class="card-body">
                                    <i class="icon fa fa-bars fa-4x ">
                                            <FontAwesomeIcon icon={faBars} className="fa" />

                                    </i>
                                        <div class="content">
                                            <div class="title">Menu items</div>
                                            <div class="value"><span class="sign"></span>22</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <a href="http://viavilab.com/codecanyon/restaurant_script_demo/admin/tables" title="3" class="card card-banner card-aliceblue-light">
                                    <div class="card-body">
                                        <i class="icon fa fa-undo fa-4x">
                                            <FontAwesomeIcon icon={faUndo} className="fa" /> 
                                        </i>
                                        <div class="content">
                                            <div class="title">Tables</div>
                                            <div class="value"><span class="sign"></span>3</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <a href="http://viavilab.com/codecanyon/restaurant_script_demo/admin/viewbooking" title="" class="card card-banner card-yellow-light">
                                    <div class="card-body">
                                        <i class="icon fa fa-gift ">
                                            <FontAwesomeIcon icon={faGift} className="fa" /> 
                                        </i>

                                        <div class="content">
                                            <div class="title">Booking</div>
                                            <div class="value"><span class="sign"></span>36</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <a href="http://viavilab.com/codecanyon/restaurant_script_demo/admin/order" title="" class="card card-banner card-green-light">
                                    <div class="card-body">
                                        <i class="icon fa fa-map-o">
                                            <FontAwesomeIcon icon={faMap} className="fa" /> 
                                        </i>
                                        <div class="content">
                                            <div class="title">Order List</div>
                                            <div class="value"><span class="sign"></span> 11</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <a href="http://viavilab.com/codecanyon/restaurant_script_demo/admin/users" title="83" class="card card-banner card-blue-light">
                                    <div class="card-body">
                                        <i class="icon fa fa-users fa-4x">
                                            <FontAwesomeIcon icon={faUsers} className="fa" /> 
                                        </i>
                                        <div class="content">
                                            <div class="title">Users</div>
                                            <div class="value"><span class="sign"></span>83</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <br/>

  
 
 			</div>
                    </div>
                </div>
            </div>

    );
  }
}
