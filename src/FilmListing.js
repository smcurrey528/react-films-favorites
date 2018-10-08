import React, {Component} from 'react';


class FilmListing extends Component {
  render() {
     let allFilms = this.props.film.map((film,index) => {
     return (
       <div>
       <h1>{film.title}</h1>
       </div>
       )
   })
    return(
      <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <h1> {this.props.film[0].title} </h1>
    <ul> {allFilms} </ul>
  </div>
  )
  }
}
export default FilmListing;
