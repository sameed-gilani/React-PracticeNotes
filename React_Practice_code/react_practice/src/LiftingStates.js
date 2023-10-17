import React from 'react';


export function BoilingVerdict(props) {

    if(props.celsius){
        if (props.celsius >= 100) {
            return <p>The water would boil.</p>;
        }
        return <p>The water would not boil.</p>;
    }
    else{
        return <p> Enter a Value to find out!</p>;
    }
}

export class CalculatorC extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
                <BoilingVerdict
                    celsius={parseFloat(temperature)} />
                <CalculatorF tempC = {this.state.temperature}/>
            </fieldset>
        );
    }
}

export class CalculatorF extends React.Component {
    constructor(props) {
        super(props);
        const temperature = Number(this.props.temperature);
    }

    render() {
        return (
                <p>{this.temperature*1.8+32} is the temperature in Farenheit!</p>

        );
    }
}