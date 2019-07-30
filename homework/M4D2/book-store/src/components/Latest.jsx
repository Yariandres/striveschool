import React, { Component } from 'react';
import Fantasy from '../data/fantasy.json';

// bootstrap
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter } from 'reactstrap';

  class Latest extends Component {
    render() {
      return (
        <div className="container">
          <h1 className="text-center my-5">Latest Release</h1>
          <Row>    
            {Fantasy.slice(0, 8).map((filmDetail, index) => {
              return  <Col xs="4" md="3" className="mb-4">
                        <Card style={{ height: "100%" }}>
                          <CardImg style={{ maxheight: "200px", maxWidth: "auto" }} top width="100%" src={filmDetail.img}/>
                          <CardBody>
                            <CardTitle>{ filmDetail.title  }</CardTitle>
                            <CardSubtitle>ASIN: { filmDetail.asin }</CardSubtitle>
                            <small>Price: {filmDetail.price }$</small>
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
  
  export default Latest

// export default class Latest extends React.Component {

  // render() {
  //   // high order array method map()
  //   return this.props.latest.map((latestRelease) => (
      
  //   ));


//   }

// }


