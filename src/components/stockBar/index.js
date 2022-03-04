import React, { Component } from 'react';
import './style.css'


export default class TopBar extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="banner">
                    <div className="column-item">
                        <span><p>&nbsp;<b>Markets</b> as of 3/4/3033 11:30 a.m.,ET</p></span>
                    </div>
                    <div className="column-item">
                        <span>
                            <p>&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <b>DIJA &nbsp;</b>18,132.70 &nbsp;<a className="stockNum">-81.72&nbsp;</a>
                                &nbsp;&nbsp;&nbsp;</p></span>
                    </div>
                    <div className="column-item">
                        <span><p>&nbsp;&nbsp;&nbsp;
                            <b>NASDAQ &nbsp;&</b>
                            4,963.53 &nbsp;<a className="stockNum">-24.36</a>
                            &nbsp;&nbsp;&nbsp;</p></span>
                        
                    </div>
                    <div className="column-item">
                        <span><p>&nbsp;&nbsp;&nbsp;
                            <b>S&P &nbsp;</b>
                            2,104.50 &nbsp;<a className="stockNum">-6.24</a>
                            &nbsp;&nbsp;&nbsp;</p></span>
                    </div>

                    <div className="column-item">
                        <span><p>&nbsp;&nbsp;&nbsp;
                            <b>10-year T-Note &nbsp;</b> 
                            2.00%&nbsp;<a className="stockNum">-0.01</a>
                            &nbsp;&nbsp;&nbsp;</p></span>
                    </div>

                </div>
            </div>
        );
    }
}