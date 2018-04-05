import React, { Component } from 'react';
import ContentThumbnail from '../../ContentThumbnail/ContentThumbnail';
import './Home.css';
import BikePic from '../../../assets/img/IMG_7271.jpg';

class Home extends Component {
    render() {
        return (
            <div className='Home'>
            <div className='jumbotron'>
                <h2>Home</h2>
                <p>Home Welcome home home home photo of bike bike bike</p>
            </div>
            <div style={{textAlign: 'left' ,margin: '0'}}>
                <div className='container custom-container' >
                    <div className='col-sm-3' style={{padding: '0 5px 0 0'}}>
                        <ContentThumbnail image={BikePic} title='Bike' desc='bike bike bike'/>
                    </div>
                    <div className='col-sm-3' style={{padding: '0 5px 0 0'}}>
                        <ContentThumbnail image={BikePic} title='Bike' desc='bike bike bike'/>
                    </div>
                    <div className='col-sm-3' style={{padding: '0 5px 0 0'}}>
                        <ContentThumbnail image={BikePic} title='Bike' desc='bike bike bike'/>
                    </div>
                    <div className='col-sm-3' style={{padding: '0 5px 0 0'}}>
                        <ContentThumbnail image={BikePic} title='Bike' desc='bike bike bike'/>
                    </div>
                </div>
                <div className='container custom-container' >
                    <div className='col-sm-3' style={{padding: '0 5px 0 0'}}>
                        <ContentThumbnail image={BikePic} title='Bike' desc='bike bike bike'/>
                    </div>
                    <div className='col-sm-3' style={{padding: '0 5px 0 0'}}>
                        <ContentThumbnail image={BikePic} title='Bike' desc='bike bike bike'/>
                    </div>
                    <div className='col-sm-3' style={{padding: '0 5px 0 0'}}>
                        <ContentThumbnail image={BikePic} title='Bike' desc='bike bike bike'/>
                    </div>
                    <div className='col-sm-3' style={{padding: '0 5px 0 0'}}>
                        <ContentThumbnail image={BikePic} title='Bike' desc='bike bike bike'/>
                    </div>
                </div>
            </div>
            </div>
            
        )
    }
}

export default Home;