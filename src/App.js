import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './component/Home/';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{height: '120px'}}>
          <div style={{height: '80px'}}/>
          <div>
          <Link to='/'>Home</Link>
          </div>
        </header>
        <div className='container-fluid' style={{padding: '0', margin: '0'}}>
          <Route path='/' component={Home}/>
        </div>
      </div>
    );
  }
}

export default App;
