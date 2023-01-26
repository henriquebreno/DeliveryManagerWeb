import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import '../css/mainContent.css';
import { MainContent} from './MainContent'

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
     <div>
        
        <NavMenu/>   
        <MainContent routeContent={this.props.children} />
          

       
    </div>
    );
  }
}
