import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Logo from './assets/img/spiral.jpg';
import Home from './component/page/Home/Home';
import Product from './component/page/Product/Product';
import Other from './component/page/Other/Other';
import About from './component/page/About/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className='row' style={{padding: '5px 0 5px 0', margin: '0'}}>
            <div className='hidden-xs'>
              <img src={Logo} className='App-logo'/>
            </div>
          </div>
          <Navbar/>
        </header>
        <div className='container-fluid' style={{padding: '0', margin: '0'}}>
          <Route exact path='/' component={Home}/>
          <Route path='/product' component={Product} />
          <Route path='/other' component={Other} />
          <Route path='/about' component={About} />
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
