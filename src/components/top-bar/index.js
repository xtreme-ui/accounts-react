import React, { Component } from 'react';

export default class TopBar extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <a href="/">
                    <h1>Welcome back</h1>
                    <p>Email:</p>
                </a>
                <a href="/" className="button fancy-button">
                You have 0 unread messages
                    <i className="material-icons">email</i>
               </a>
            </div>
        );
    }
}