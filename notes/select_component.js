import React, { Component } from 'react';

class ControlledSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'option1', // Initialize the selected option in state
    };
  }

  handleChange = (event) => {
    // Update the state with the new selected option when the dropdown changes
    this.setState({ selectedOption: event.target.value });
  }

  render() {
    return (
      <div>
        <label>Select an option:</label>
        <select
          value={this.state.selectedOption} // Controlled by component state
          onChange={this.handleChange} // React event handler
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <p>Selected option: {this.state.selectedOption}</p>
      </div>
    );
  }
}

export default ControlledSelect;
