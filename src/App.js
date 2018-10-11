import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';
import TMDB from './TMDB.js';


class App extends Component {

  render() {
    return (
      <div className="film-library">

     <FilmListing film={TMDB.films}/>

  <FilmDetails film={TMDB.films}/>
  </div>
    );
  }
}

export default App;
