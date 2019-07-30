import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Welcome = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-3">Give Us Your Money</h1>
          <p className="lead">Partly great or entirely useless books.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Welcome;