import React, {Component} from 'react';

class Fave extends Component {

  handleClick(e) {

    console.log('handling Fave click', e)
  }
  render() {
    return (
      <div className="film-row-fave add_to_queue" onClick={this.handleClick}>
  <p className="material-icons">add_to_queue</p>
</div>
      )
  }
}
export default Fave;
