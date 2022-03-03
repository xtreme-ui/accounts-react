import React, { Component } from 'react'
import Ticker from 'react-ticker'

export default class StockBar extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <a href="/">
                    <p><b>Markets</b> as of 3/3/2022 4:30 p.m., ET </p>
                </a>
                <a href="/" className="stocks">
                <p>You have 0 unreas messages</p>
                    <Ticker>
                        {({ index }) => (
                            <>
                            <h1 style={{ paddingRight: "0.5em" }}>
                                NASDAQ #{index}!
                            </h1>
                            </>
                        )}
                    </Ticker>
               </a>
            </div>
        );
    }
}