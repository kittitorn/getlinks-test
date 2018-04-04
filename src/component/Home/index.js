import React, { Component } from 'react';
import './Home.css';
import BikePic from '../../assets/img/IMG_7271.jpg';

class Home extends Component {
    render() {
        return (
            <div className='Home'>

            <div className='jumbotron' style={{margin: '0 0 10 0'}}>
                <h2>Home</h2>
                <p>Home</p>
            </div>

            <div style={{textAlign: 'left' ,margin: '0'}}>
                <div className='container custom-container' >
                    <div className='col-sm-3 thumbnail custom-thumbnail'>
                        <img src={BikePic} className='img-rounded'/>
                        <h4>IMG</h4>
                        <p>test</p>
                    </div>
                    <div className='col-sm-3 thumbnail custom-thumbnail'>
                        <img src={BikePic} className='img-rounded'/>
                        <h4>IMG</h4>
                        <p>test</p>
                    </div>
                    <div className='col-sm-3 thumbnail custom-thumbnail'>
                        <img src={BikePic} className='img-rounded'/>
                        <h4>IMG</h4>
                        <p>test</p>
                    </div>
                    <div className='col-sm-3 thumbnail custom-thumbnail'>
                        <img src={BikePic} className='img-rounded'/>
                        <h4>IMG</h4>
                        <p>test</p>
                    </div>
                </div>
                <div className='container custom-container' >
                    <div className='col-sm-3 thumbnail custom-thumbnail'>
                        <img src={BikePic} className='img-rounded'/>
                        <h4>IMG</h4>
                        <p>test</p>
                    </div>
                    <div className='col-sm-3 thumbnail custom-thumbnail'>
                        <img src={BikePic} className='img-rounded'/>
                        <h4>IMG</h4>
                        <p>test</p>
                    </div>
                    <div className='col-sm-3 thumbnail custom-thumbnail'>
                        <img src={BikePic} className='img-rounded'/>
                        <h4>IMG</h4>
                        <p>test</p>
                    </div>
                    <div className='col-sm-3 thumbnail custom-thumbnail'>
                        <img src={BikePic} className='img-rounded'/>
                        <h4>IMG</h4>
                        <p>test</p>
                    </div>
                </div>
            </div>

            

            </div>
            
        )
    }
}

export default Home;