import React from 'react';
import axios from 'axios';

import { 
  Card, 
  CardTitle, 
  CardImg,
  Row,
  Col } from 'reactstrap';

export default class FavSagaNow extends React.Component {
  constructor() {
    super();

    // set the innitial state
    this.state = {
      films: [],
    }
  }

  // submitHandler = async (event) => {
  //   event.preventDefault();
  //   // loadData()
  // }

  componentWillMount = () => {
    axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=b4b1863b&s=John%20wick")
    .then(res => {
      
      this.setState({
        films: res.data.Search
      })
    })    
  }
  
  render() {
    return (
      <div className="container-fluid text-light mt-4">        
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