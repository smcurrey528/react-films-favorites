import React, {Component} from 'react';
import FilmPoster from './FilmPoster.js';
import Fave from './Fave.jsx';

class FilmRow extends Component {

  handleDetailsClick(film) {
    console.log('fetching details for,')
  }
  render() {
    let year= new Date(this.props.film.release_date).getFullYear();
    return (

<div className="film-row">
  <FilmPoster movies= {this.props.film.poster_path}/>

  <div className="film-summary">
    <h1>{this.props.film.title}</h1>

    <p>{year}</p>
  </div>
  <Fave />
</div>
      )
  }
}
export default FilmRow;
