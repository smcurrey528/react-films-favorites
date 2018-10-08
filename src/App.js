import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';
import TMDB from './TMDB.js';

class App extends Component {
constructor(props) {
    super(props);
    this.props = {
      films: this.props.films
    };
  }

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
