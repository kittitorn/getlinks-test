import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div>
              <nav className="navbar navbar-default" role="navigation">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
            
              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li style={{width: '100px'}}><Link to='/'>Home</Link></li>
                  <li style={{width: '100px'}}><Link to='/product'>Product</Link></li>
                  <li style={{width: '100px'}}><Link to='/other'>Other</Link></li>
                  <li style={{width: '100px'}}><Link to='/about'>About</Link></li>
                </ul>
              </div>
              </nav>
            </div>
        )
    }
}