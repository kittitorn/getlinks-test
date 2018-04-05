import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './component/Home/';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='container'>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
            <a className="navbar-brand" href="#">WebSiteName</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Page 1</a></li>
              <li><a href="#">Page 2</a></li>
              <li><a href="#">Page 3</a></li>
            </ul>
          </div>
        </header>
        <div className='container-fluid' style={{padding: '0', margin: '0'}}>
          <Route path='/' component={Home}/>
        </div>
        <footer className='container-fluid' style={{textAlign: 'left' ,margin: '0', padding: '0'}}>
          <div style={{backgroundColor: '#eee', margin: '0'}}>
              <div style={{padding: '30px 0 50px 0'}}>
                <div className='container custom-container' >
                    <div className='col-sm-3'>
                        <h4>Footer 1</h4>
                        <p>Footer</p>
                    </div>
                    <div className='col-sm-3'>
                        <h4>Footer 2</h4>
                        <p>Footer</p>
                    </div>
                    <div className='col-sm-3'>
                        <h4>Footer 3</h4>
                        <p>Footer</p>
                    </div>
                    <div className='col-sm-3'>
                        <h4>Footer 4</h4>
                    </div>
                </div>
              </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
