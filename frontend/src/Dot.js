// import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React, { Component } from 'react';
import './Dot.css'

class Dot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.handleClick = this.handleClick.bind(this)
    };

    handleClick() {
        this.setState({ visible: ! this.state.visible });
    }

    render() {
        return (
            <div id="dot-container">
                <div>
                    <button id="dot" onClick={this.handleClick}>{this.state.visible ? 'X' : 'O'}</button>
                    <ReactCSSTransitionGroup 
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                    >
                        { 
                            this.state.visible ? 
                            <div className='panel'> 
                            </div> 
                            : null 
                        }
                            <h1 id="name"> {this.props.text} </h1>
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}

export default Dot;