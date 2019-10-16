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

  // Save the text you entered in the input to the state of the component
  _handleChange = e => {
    this.setState({ inputMovie: e.target.value });
  };

  _handleSubmit = e => {
    e.preventDefault();
    //alert(this.state.inputMovie);
    const { inputMovie } = this.state;
    const endpoint = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`;

    fetch(endpoint)
      .then(res => res.json())
      .then(results => {
        //console.log(results);
        // Asignamos valores por defecto para cuando venga undefined en la busqueda xq la pelicula no existe, no me de error por el .lenght que hago de Search en el App.js
        const { Search = [], totalResults = '0' } = results;
        console.log(Search, totalResults);
        this.props.onResults(Search);
      });
  };

  handleCuandoCAmbieElDatoDelInput = inputData => {
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
        <Input cuandoCambies={this.handleCuandoCAmbieElDatoDelInput} />
        <Button text="Search" />
      </form>
    );
  }
}
