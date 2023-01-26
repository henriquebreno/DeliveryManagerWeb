import React, { Component } from 'react';
import '../css/home.css'

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
        <div className="col-sm-9">
            <div className="card-content">
                <address>
                    <strong>Twitter, Inc.</strong><br></br>
                        1355 Market St, Suite 900<br></br>
                            San Francisco, CA 94103<br></br>
                        <abbr title="Phone">P:</abbr> (123) 456-7890
                </address>

                <address>
                    <strong>Full Name</strong><br></br>
                    <a href="mailto:#">first.last@example.com</a>
                    </address>
            </div>
            <div className="card-content">
            
            </div>
      </div>

    );
  }
}
