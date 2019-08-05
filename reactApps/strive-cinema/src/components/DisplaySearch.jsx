import React from 'react';
import {
  CardTitle,
  CardImg,
  Card,
  Row,
  Col,
 } from 'reactstrap';

export default class DisplaySearch extends React.Component {

  render() {

      return (
        <div> {Object.values(this.props.films).map(film => <p className="text-light">{film.Title}</p>)} </div>
      );
  }
}
