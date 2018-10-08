import React, { Component } from 'react';
import './App.css';
import Filmlist from './FilmListing.js';
import FilmDetails from './FilmDetails.js';

class App extends Component {
  render() {
    return (
      <div className="film-library">
  <div className="film-list">
    <h1 className="section-title">FILMS</h1>
  </div>

  <div className="film-details">
    <h1 className="section-title">DETAILS</h1>
  </div>
</div>
    );
  }
}

export default App;
