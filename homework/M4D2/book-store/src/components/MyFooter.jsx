import React from 'react';
import { Nav, NavLink } from 'reactstrap';

export default class MyFooter extends React.Component {
  render() {
    return (
      <div>   
        <hr />
        <Nav>
          <NavLink href="#">Home</NavLink> <NavLink href="#">About</NavLink> <NavLink href="#">Browse</NavLink>
        </Nav>
      </div>
    );
  }
}