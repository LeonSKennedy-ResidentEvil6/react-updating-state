import React from 'react'

class ClickityClick extends React.Component {
    constructor() {
        super();
        this.state = {
            hasBeenClicked: false
        };
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked
            }
        })
        
    };

    render() {
        return(
            <div>
                {/* <p>I have {this.state.hasBeenClicked ? null : 'not'} has been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button> */}
                <button onClick={this.handleClick}>{this.state.hasBeenClicked ? "No" : "OFF" }</button>
            </div>
        )
    }
}

export default ClickityClick;

