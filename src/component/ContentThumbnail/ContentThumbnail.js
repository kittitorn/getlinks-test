import React, { Component } from 'react';
import './ContentThumbnail.css';

export default class ContentThumbnail extends Component {
    render() {
        return (
          <div className='thumbnail custom-thumbnail'>
            <img src={this.props.image} className='img-rounded'/>
            <h4>{this.props.title}</h4>
            <p>{this.props.desc}</p>
          </div>
        )
    }
}