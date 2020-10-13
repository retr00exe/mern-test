import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand" >ExerTracker</Link>
                <div className="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="navbar-item">
                        <Link to="/" className="nav-link">Exercises</Link>
                    </li>
                    <li class="navbar-item">
                        <Link to="/create" className="nav-link">Create Exercise Log</Link>
                    </li>
                    <li class="navbar-item">
                        <Link to="/user" className="nav-link">Create User</Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}