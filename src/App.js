import React from 'react';
import { Title } from './Components/Atoms/Title/Title';
import { SearchForm } from './Components/Molecules/SearchForm/SearchForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title>Search Movies</Title>
      <div className="SearchForm-wrapper">
        <SearchForm />
      </div>
    </div>
  );
}

export default App;
