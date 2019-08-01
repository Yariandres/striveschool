import React, { Component } from 'react';
import Fantasy from '../data/fantasy.json';

// bootstrap
import { Row, Col } from 'reactstrap';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter } from 'reactstrap';

  class Latest extends Component {
    render() {
      return (
        <div className="container">
          <h1 className="text-center my-5">Latest Release</h1>
          <Row>    
            {Fantasy.slice(0, 4).map((bookDetail, index) => {
              return  <Col xs="4" md="3" className="mb-4">
                        <Card style={{ height: "100%" }}>
                          <CardImg style={{ maxheight: "200px", maxWidth: "auto" }} top width="100%" src={bookDetail.img}/>
                          <CardBody>
                            <CardTitle>{ bookDetail.title  }</CardTitle>
                            <CardSubtitle>ASIN: { bookDetail.asin }</CardSubtitle>
                            <small>Price: {bookDetail.price}$</small>
                            <br/>
                            </CardBody>
                            <CardFooter className="text-muted">
                              <Button className="mt-2">View Details</Button>
                            </CardFooter>
                        </Card>
                      </Col>            
            })}
            
          </Row>
        </div>
      )
    }
  }
  
  export default Latest;


