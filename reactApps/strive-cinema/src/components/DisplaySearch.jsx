import React from 'react';
import { Link } from 'react-router-dom';

import {
  CardTitle,
  CardImg,
  Card,
  Row,
  Col,
 } from 'reactstrap';


export default class DisplaySearch extends React.Component {

  constructor(prop) {
    super(prop);

    // set the innitial state
    this.state = {
      text: ''
    }
  }  

  // adding css
  termStyle = () => {
    return {
      color: '#C1024F',
      fontSize: '2.9rem',
    }    
  }

  render() {
    return (
      <div className="container-fluid text-light">
        <h2 className="text-light my-2">
          Search display for: 
          <span 
            className="lead ml-2" 
            style={this.termStyle()}>{this.props.keyword}
          </span>
        </h2>
        <Row>            
          {Object.values(this.props.films).map((film, index) =>
            <Col key={index} sm="3" md="2" className="text-light">{film.Title}
              <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333'}}>

                <Link to={"/details/"+film.imdbID}>
                  <CardImg 
                  src={film.Poster} 
                  alt="film" 
                  />
                </Link>

              <CardTitle>{film.Title}</CardTitle>
              <small>{film.Year} {film.imdbID}</small>
              </Card>              
            </Col>
          )}
        </Row>
      </div>
    );
  }
}




