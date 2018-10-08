import React, {Component} from 'react';
import FilmPoster from './FilmPoster.js';

class FilmRow extends Component {
  let releaseYear = new Date ({this.props.film.release_date})
  releaseYear.getFullYear();
  console.log(releaseYear.getFullYear();)
  render() {
    return (

<div className="film-row">
  <FilmPoster />

  <div className="film-summary">
    <h1>{this.props.film.title}</h1>

    <p>{this.props.film.release_date}</p>
  </div>
</div>
      )
  }
}
export default FilmRow;
