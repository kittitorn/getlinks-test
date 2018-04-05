import React, { Component } from 'react';
import './Content.css';

export default class Content extends Component {
    render() {
        return (
            <div className='col-sm-3'>
                <h4>{this.props.title}</h4>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}