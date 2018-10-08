import React, {Component} from 'react';

class FilmRow extends Component {
  render() {
    return (

<div className="film-row">
  <img src={this.props.film.poster_path} alt="" />

  <div className="film-summary">
    <h1>{this.props.film.title}</h1>
    <p>{this.props.film.release_date}</p>
  </div>
</div>
      )
  }
}
export default FilmRow;
