import React, { Component } from 'react';
import './Content.css';

export default class Content extends Component {
    render() {
        return (
            <div style={{padding: '30px 5px 5px 5px'}}>
                <h4>{this.props.title}</h4>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}