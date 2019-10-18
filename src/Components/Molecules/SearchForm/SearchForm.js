import React, { Component } from 'react';
import { Input } from '../../Atoms/Input/Input';
import { Button } from '../../Atoms/Button/Button';
import './SearchForm.css';
import '../../Atoms/Input/Input.css';

const API_KEY = 'ba8563b';

export class SearchForm extends Component {
  state = {
    inputMovie: ''
  };

  _handleChange = e => {
    this.setState({ inputMovie: e.target.value });
  };

  _handleSubmit = e => {
    e.preventDefault();
    const { inputMovie } = this.state;
    const endpoint = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`;

    fetch(endpoint)
      .then(res => res.json())
      .then(results => {
        //console.log(results);
        const { Search = [], totalResults = '0' } = results;
        //console.log(Search, totalResults);
        this.props.onResults(Search);
      });
  };

  _handleWhenTheInputDataChanges = inputData => {
    this.setState({ inputMovie: inputData });
  };

  render() {
    return (
      <form className="form" onSubmit={this._handleSubmit}>
        {/* <input
          className="input"
          value={this.state.inputMovie}
          onChange={this._handleChange}
          type="text"
          placeholder="Movie to search..."
        /> */}
        <Input whenYouChange={this._handleWhenTheInputDataChanges} />
        <Button text="Search" />
      </form>
    );
  }
}
