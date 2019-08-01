import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
// importing the Comment component
import ShowComment from './ShowComment';

class Comments extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      commetDeatils: {
        bookComment: "",
        bookRatings: "",
        elementId: ""        
      }      
    }    
  }

  submitComment = async (event) => {
    event.preventDefault();

  }

  state = {}

  render() {
    return (
      <Form onSubmit={this.submitComment}>
        
        <div className="container">
        <Row>
          <Col md="6">
            <FormGroup>
              <Label for="bookComment">Email</Label>
              <Input 
                type="text" 
                name="email" 
                id="bookComment" 
                placeholder="Leave a comment"  
                value={this.state.commetDeatils.bookComment} 
                onChange={value => {
                var res = this.state.commetDeatils;
                res.bookComment = value.currentTarget.value;
                this.setState({ commetDeatils: res });
                
                }}
              />

            </FormGroup>

            <FormGroup>
              <Label for="bookRatings">Rate it</Label>
              <Input 
              type="number" 
              name="rate" 
              id="bookRatings" 
              placeholder="Rete the book"
              value={this.state.commetDeatils.bookRatings} 
              onChange={value => {
              var res = this.state.commetDeatils;
              res.bookRatings = parseInt(value.currentTarget.value);
              this.setState({ commetDeatils: res });
                
                }}
              />              
            </FormGroup>

            <FormGroup>
              <Label for="elementId">ASIN</Label>
              <Input 
                type="number" 
                name="asin" 
                id="elementId" 
                placeholder="ASIN" 
                value={this.state.commetDeatils.elementId} 
                onChange={value => {
                var res = this.state.commetDeatils;
                res.elementId = parseInt(value.currentTarget.value);
                this.setState({ commetDeatils: res });                
                }}
              />
            </FormGroup>
            
            <Button>Submit</Button>
          </Col>

          <Col md="6">
            <ShowComment /> {/* importing the 1 coment component */}
          </Col>
        </Row>
        </div>
      </Form>
    )
  }
}

export default Comments;
