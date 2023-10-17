import React from 'react';

export class ToggleCondition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.count = 0;
    }

    handleClick = () => {
        this.count ++;
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    };

    On = () => {
        return(
          <h2> The Button has been Clicked</h2>
        );
    }
    Off = () => {
        return(
            <h2> The Button has been Un-clicked</h2>
        );
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? this.On() : this.Off()}
                <h1>
                    Button Clicked = {this.count}
                </h1>
            </button>
        );
    }
}