import React from 'react';
import axios from 'axios';

import { 
  Card, 
  CardTitle, 
  CardImg,
  Row,
  Col } from 'reactstrap';

export default class FavGallery extends React.Component {
  constructor() {
    super();

    // set the innitial state
    this.state = {
      films: [],
    }
  }

  componentWillMount = () => {
    axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=b4b1863b&s=terminator")
    .then(res => {
      
      this.setState({
        films: res.data.Search
      })
      // console.log(res.data.Search)
    })    
  }
  
  render() {
    return (
      <div className="container-fluid text-light mt-4">
        <h2 className="lead mt-5 mb-4">Favourite Sagas</h2>
        <Row>
        {this.state.films.slice(0, 6).map(film =>        
          <Col key={film.imdbID} sm="3" md="2">
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardImg src={film.Poster} alt="film"/>
                <CardTitle>{film.Title}</CardTitle>
                <small>{film.Year}</small>
            </Card>
          </Col>
        
      )}
      </Row> 
      </div>
    );
  }
}