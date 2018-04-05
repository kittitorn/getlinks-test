import React, { Component } from 'react';
import Content from '../Content/Content';
import Triangle from '../../assets/img/triangle.png';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
        <footer className='container-fluid' style={{textAlign: 'left' ,margin: '0', padding: '0'}}>
          <div style={{backgroundColor: '#eee', margin: '0'}}>
              <div style={{padding: '30px 0 30px 0'}}>
                <div className='container custom-container' >
                    <div className='col-sm-3'>
                        <Content title='Footer1' desc='footer text ja footer ja'/>
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
                        <div style={{display: 'table', width: '100%', padding: '10px 0 0 0'}}>
                        <img src={Triangle} style={{display:'inline',maxWidth: '30%'}}/>
                        <img src={Triangle} style={{display:'inline',maxWidth: '30%'}}/>
                        <img src={Triangle} style={{display:'inline',maxWidth: '30%'}}/>
                        </div>
                    </div>
                </div>
              </div>
          </div>
        </footer>
        )
    }
}