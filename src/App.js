import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';

class App extends Component {
  render() {
    return (
      <div className="film-library">
     <FilmListing />

  <FilmDetails/>
  </div>
    );
  }
}

export default App;
