import React from 'react';

export class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', age: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.name, age: event.target.age});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        alert('An age was submitted: ' + this.state.age);

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Age:
                    <input type="text" value={this.state.age} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}