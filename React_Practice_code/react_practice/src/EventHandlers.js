import React from 'react';

export class Toggle extends React.Component {
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

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
                <h1>
                    Button Clicked = {this.count}
                </h1>
            </button>
        );
    }
}