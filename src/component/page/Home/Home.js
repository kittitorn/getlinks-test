import React, { Component } from 'react';
import ContentThumbnail from '../../ContentThumbnail/ContentThumbnail';
import './Home.css';
import BikePic from '../../../assets/img/IMG_7271.jpg';

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
                    <ContentThumbnail image={BikePic} title='Bike' desc='bike bike bike'/>
                    <ContentThumbnail image={BikePic} title='Bike' desc='bike bike bike'/>
                    <ContentThumbnail image={BikePic} title='Bike' desc='bike bike bike'/>
                    <ContentThumbnail image={BikePic} title='Bike' desc='bike bike bike'/>
                </div>
                <div className='container custom-container' >
                    <ContentThumbnail image={BikePic} title='Bike' desc='bike bike bike'/>
                    <ContentThumbnail image={BikePic} title='Bike' desc='bike bike bike'/>
                    <ContentThumbnail image={BikePic} title='Bike' desc='bike bike bike'/>
                    <ContentThumbnail image={BikePic} title='Bike' desc='bike bike bike'/>
                </div>
            </div>
            </div>
            
        )
    }
}

export default Home;