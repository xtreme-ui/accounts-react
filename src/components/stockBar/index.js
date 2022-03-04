import React, { Component } from 'react';
import './style.css'

export default class TopBar extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="banner">
                    <div className="column-item">
                        <p><b>Markets</b> as of 3/4/3033 11:30 a.m.,ET </p>
                    </div>
                    <div className="column-item">
                        <p>DIJA 18,132.70</p>
                    </div>
                    <div className="column-item">
                        <p>NASDAQ 18,132.70</p>
                    </div>
                    <div className="column-item">
                        <p>BNP 18,132.70</p>
                    </div>

                </div>
            </div>
        );
    }
}