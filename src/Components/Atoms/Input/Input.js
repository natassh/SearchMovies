import React from 'react';
import './Input.css';

export class Input extends React.Component {
  state = {
    data: ''
  };

  _handleChange = e => {
    const { cuandoCambies } = this.props;

    const inputData = e.target.value;
    cuandoCambies(inputData);
    this.setState({ data: inputData });
  };
  render() {
    return (
      <input
        className="input"
        value={this.state.data}
        onChange={this._handleChange}
        type="text"
        placeholder="Movie to search..."
      />
    );
  }
}
