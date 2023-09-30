import React, { Component } from 'react';

class ControlledInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '', // Initialize the state with an empty value
    };
  }

  handleChange = (event) => {
    // Update the state with the new value when the input changes
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.inputValue} // Controlled by component state
        onChange={this.handleChange} // React event handler
      />
    );
  }
}

export default ControlledInput;
