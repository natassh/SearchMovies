import React from 'react';
import { Title } from '../../Components/Atoms/Title/Title';
import { SearchForm } from '../../Components/Molecules/SearchForm/SearchForm';
import { MoviesList } from '../../Components/Molecules/MoviesList/MoviesList';

export class Home extends React.Component {
  state = { usedSearch: false, results: [] };

  _handleResults = results => {
    this.setState({ results, usedSearch: true });
  };

  _renderResults = () => {
    const { results } = this.state;
    return results.length === 0 ? (
      <p>Sorry 😉 Results not found!</p>
    ) : (
      <MoviesList movies={results} />
    );
  };

  render() {
    return (
      <>
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <small>Use the form to search a movie</small>
        )}
      </>
    );
  }
}
