import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './component/Home/';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{height: '80px'}}>
          <div style={{height: '80px'}}/>
          <div>
          <Link to='/'>Home</Link>
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
