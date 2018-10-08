import React, {Component} from 'react';
import FilmRow from './FilmRow.js';

class FilmListing extends Component {
  render() {
     let allFilms = this.props.film.map((film,index) => {
      return <FilmRow key={film.id} film={film}/>
    })
    return(
      <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <h1> {this.props.film[0].title} </h1>
      { allFilms }
  </div>
  )
  }
}
export default FilmListing;
