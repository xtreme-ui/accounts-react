import React, { Component } from 'react';
import './style.css'


export default class TopBar extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="banner">
                    <p><b>Markets</b> as of 3/4/3033 11:30 a.m.,ET</p> 
                    <div className="column-item">
                        <p><b>DIJA  </b>18,132.70  <a className="stockNum">-81.72 </a></p> 
                    </div>
                    <div className="column-item">
                        <p><b>NASDAQ  &</b>4,963.53  <a className="stockNum">-24.36</a></p> 
                    </div>
                    <div className="column-item">
                         <p><b>S&P  </b>2,104.50  <a className="stockNum">-6.24</a></p> 
                    </div>
                    <div className="column-item">
                        <p><b>10-year T-Note  </b>2.00% <a className="stockNum">-0.01</a></p> 
                    </div>
                </div>
            </div>
        );
    }
}