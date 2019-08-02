import React from 'react';

export default class DisplaySearch extends React.Component {

  render() {
    console.log(this.props.films)
    return (
      <div className="container">
        <h1 className="text-light">Display search for: </h1>
        </div>     
    );
  }
}