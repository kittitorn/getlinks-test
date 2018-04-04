import React, { Component } from 'react';
import './Home.css';
import BikePic from '../../assets/img/IMG_7271.jpg';

class Home extends Component {
    render() {
        return (
            <div className='Home'>
            <div className='jumbotron' style={{margin: '0 0 0 0'}}>
                <h2>Home</h2>
                <p>Home</p>
            </div>
            <div className='container' style={{width: '768px'}}>
                <div className='col-sm-3 thumbnail'>
                    <img src={BikePic} className='img-rounded'/>
                    <p>test</p>
                </div>
                <div className='col-sm-3 thumbnail'>
                    <img src={BikePic} className='img-rounded'/>
                    <p>test</p>
                </div>
                <div className='col-sm-3 thumbnail'>
                    <img src={BikePic} className='img-rounded'/>
                    <p>test</p>
                </div>
                <div className='col-sm-3 thumbnail'>
                    <img src={BikePic} className='img-rounded'/>
                    <p>test</p>
                </div>
            </div>
            <div className='container' style={{width: '768px'}}>
                <div className='col-sm-3 thumbnail'>
                    <img src={BikePic} className='img-rounded'/>
                    <p>test</p>
                </div>
                <div className='col-sm-3 thumbnail'>
                    <img src={BikePic} className='img-rounded'/>
                    <p>test</p>
                </div>
                <div className='col-sm-3 thumbnail'>
                    <img src={BikePic} className='img-rounded'/>
                    <p>test</p>
                </div>
                <div className='col-sm-3 thumbnail'>
                    <img src={BikePic} className='img-rounded'/>
                    <p>test</p>
                </div>
            </div>
            <footer>
            <div className='container' style={{width: '768px'}}>
                <div className='col-sm-3'>
                    <h3>Footer 1</h3>
                    <p>Footer</p>
                </div>
                <div className='col-sm-3'>
                    <h3>Footer 2</h3>
                    <p>Footer</p>
                </div>
                <div className='col-sm-3'>
                    <h3>Footer 3</h3>
                    <p>Footer</p>
                </div>
                <div className='col-sm-3'>
                    <h3>Footer 4</h3>
                    <p>Footer</p>
                </div>
                </div>
            </footer>
            </div>
            
        )
    }
}

export default Home;