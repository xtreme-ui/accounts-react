import React, { Component } from 'react';
import './style.css'

export default class TopBar extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <a href="/">
                    <h1>Welcome back</h1>
                    <div className="greeting">
                        <div className="column left">
                            <p>Email:</p>
                        </div>
                        <div className="column middle">
                            <p>Last Logon: March 7, 2022 08:52 a.m., Eastern Time</p>
                        </div>
                        <div className="column right">
                            <p>You have 0 unread messages</p>
                            <a href="/" className="button fancy-button">
                                <i className="material-icons">email</i>
                            </a>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}