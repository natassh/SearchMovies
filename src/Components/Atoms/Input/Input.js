import React from 'react';
import './Input.css';

export class Input extends React.Component {
  render() {
    return (
      <input
        className="input"
        //value={this.state.inputMovie}
        onChange={this._handleChange}
        type="text"
        placeholder="Movie to search..."
      />
    );
  }
}
