import React, { Component } from 'react';
//import { Input } from '../../Atoms/Input/Input';
import { Button } from '../../Atoms/Button/Button';
import './SearchForm.css';
import '../../Atoms/Input/Input.css';

export class SearchForm extends Component {
  state = {
    inputMovie: ''
  };

  // Guardamos en el state del componente el texto que introduciomos en el input
  _handleChange = e => {
    this.setState({ inputMovie: e.target.value });
  };

  _handleSubmit = e => {
    e.preventDefault();
    alert(this.state.inputMovie);
  };

  render() {
    return (
      <form className="form" onSubmit={this._handleSubmit}>
        <input
          className="input"
          value={this.state.inputMovie}
          onChange={this._handleChange}
          type="text"
          placeholder="Movie to search..."
        />
        <Button text="Search" />
      </form>
    );
  }
}
