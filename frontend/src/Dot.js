import React, { Component } from 'react';

class Dot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    };

    toggleDropdown() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Dot;