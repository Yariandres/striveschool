import React from 'react';
import { LocalForm, Control, Errors  } from 'react-redux-form';
import { Spinner, Alert, FormGroup, Label, Col, Row } from 'reactstrap';

const requiredValidator = val => val && val.length;
const maxLengthValidator = len => val => !val || val.length <= len;
const minLengthValidator = len => val => !val || val.length >= len;

const emailVal = val => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);

export default class Register extends React.Component {

  constructor(params) {
    super(params);

    this.state = {
      isLoading: false,
      errMess: null
    };
  }  

  handleSubmit = async values => {
    console.log("SUBMIT", values);

    this.setState({
      isLoading: true
    });

    try {
      var response = await fetch("https://strive-school-testing-apis.herokuapp.com/api/registration", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        //reset the form
        this.setState({
          errMess: null,
          isLoading: false
        });
      } else {
        var error = await response.json();
        this.setState({
          errMess: error.message,
          isLoading: false
        });
      }
    } catch (ex) {
      console.log(ex);
      this.setState({
        errMess: ex.message,
        isLoading: false
      });
    }
  };
  
  render() {
    return (
      <div className="container">
        <h1 className="text-light homeDeading text-center mt-5 pb-4 homeHeading">Register Here</h1>
        <Row className="shadow-lg p-5 border border-danger">
          <Col sm="6">        
       
            <LocalForm 
              model="registerUser"
              onSubmit={values => this.handleSubmit(values)}
            > 
              <FormGroup>
              <Label className="text-light" for="name">Name</Label>         
              <Control.text
                id="name"
                model=".name"
                className="form-control"
                placeholder="Your name"
                validators={{
                  requiredValidator,
                  minLengthValidator: minLengthValidator(2),
                  maxLengthValidator: maxLengthValidator(20)
                }}/>

                <p className="text-light">
                  <Errors
                    model=".name"
                    show="touched"
                    className="form-error-message"
                    messages={{
                      requiredValidator:  "The name field is required",
                      minLengthValidator: "The name field should have at least 2 chars",
                      maxLengthValidator: "The name field should have max 20 chars"
                    }}/>
                </p>              
                  
              </FormGroup>
              <Label 
                className="text-light" 
                for="surname">Surname</Label>

              <FormGroup>
              <Control.text
                id="surname"
                model=".surname"
                className="form-control"
                placeholder="Your surname"
                validators={{
                  requiredValidator,
                  minLengthValidator: minLengthValidator(2),
                  maxLengthValidator: maxLengthValidator(20)
                }}/>

                <p className="text-light">
                  <Errors
                    model=".surname"
                    show="touched"
                    className="form-error-message"
                    messages={{
                      requiredValidator:  "The surname field is required",
                      minLengthValidator: "The surname field should have at least 2 chars",
                      maxLengthValidator: "The surname field should have max 20 chars"
                    }}/>
                  </p>                  
              </FormGroup>
              
              <FormGroup>
              <Label 
                className="text-light" 
                for="email">Email</Label> 
              <Control.text
                id="email"
                model=".email"
                className="form-control"
                placeholder="Your email"
                validators={{
                  requiredValidator,
                  emailVal: emailVal
                }}/>

                <p className="text-light">
                  <Errors
                    model=".email"
                    show="touched"
                    className="form-error-message"
                    messages={{
                      emailVal: "Please enter a valid email"
                    }}/>
                </p>                      
              </FormGroup>

              <FormGroup>
              <Label 
                className="text-light" 
                for="password">Password</Label> 
              <Control
                type="pass"
                id="password"
                model=".password"
                className="form-control"
                placeholder="Enter a password"
                required
                validators={{
                  requiredValidator,
                  minLengthValidator: minLengthValidator(8),
                  maxLengthValidator: maxLengthValidator(12)
                }}/>

                <p className="text-light">
                  <Errors
                    model=".password"
                    show="touched"
                    className="form-error-message"
                    messages={{
                      minLengthValidator: "Password must be at least 8 charecters long",
                      maxLengthValidator: "No loger than 12 characters"
                    }}/>
                </p>                          
              </FormGroup> 

              <Control.button 
                model="local"
                disable={{ valid: false}} 
                 
                color="success mt-4">Submit
              </Control.button>

            </LocalForm>
            {this.state.isLoading && (
              <div className="container d-flex justify-content-center my-5">
                Reserving your table, please wait
                <div>
                  <Spinner color="success" />
                </div>
              </div>
            )}

            {this.state.errMess && this.state.errMess.length > 0 && (
              <Alert color="danger">We encountered a problem while processing your request: {this.state.errMess}</Alert>
            )}

          </Col>
        </Row>      
      </div>      
    );

  }
}
