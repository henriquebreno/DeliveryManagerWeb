import React, { Component } from 'react';
import '../css/home.css'
import { NavBar } from '../components/NavBar'

export class MainContent extends Component {
    displayName = MainContent.name

  render() {
    return (
        <div className="app-container">
            <NavBar />
            {this.props.routeContent}
        </div>
    );
  }
}
