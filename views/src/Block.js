import React, { Component } from 'react';

class Block extends Component {
    constructor(props) {
        super(props);
        this.state = {
            variable1: "hello"
        }
    }

    sayName() {
        alert("hello")
    }
    
    render() {
        return (
            <div>
                <h1 id="asdf"> {this.props.name} </h1>
                <h2> {this.state.variable1} </h2>
            </div>
        );
    }
}

export default Block;