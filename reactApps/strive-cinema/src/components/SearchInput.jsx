import React from 'react';
import axios from 'axios';

import {
  Form,
  Input,
  Button,
  Row,
  Col,
 } from 'reactstrap';

export default class SearchInput extends React.Component {
  constructor(prop) {
    super(prop);

    // set the innitial state
    this.state = {
      name: '',
    }
  }

  handleChange = event => {
    this.setState({
      name: event.target.value,
    })
  }

  handleSubmit = async event => {
    event.preventDefault();

    await axios(`http://www.omdbapi.com/?i=tt3896198&apikey=b4b1863b&s=${this.state.name}`)
    .then(res => {      
      this.setState({
        films: res.data.Search
      })
      console.log(this.state.films)
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <Row className="my-5">
          <Col md={12}>        
            <Form onSubmit={this.handleSubmit}>
              <Row form>                      
                <Col md={3} sm={4}>                         
                  <Input type="text" name="search" id="search" placeholder="search" onChange={this.handleChange}/>
                </Col>
                <Col md={3} sm={4}>                                             
                  <Button type="submit" className="danger">Go</Button>                      
                </Col>
              </Row> 
            </Form>   
          </Col>
        </Row>
                    
      </div>
    );
  }
}