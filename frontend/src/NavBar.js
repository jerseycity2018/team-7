import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-static-top">
                    <ul className="nav nav-pills">
                        <li><a href="#">Brand Name</a></li>
                    </ul>
                </nav> 
            </div>
        );
    }
}

export default NavBar;