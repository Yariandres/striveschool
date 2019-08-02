import React from 'react';



import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class NavBar extends React.Component {

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">      
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Movies</NavLink>
              </NavItem>              
            </Nav>
            <NavbarBrand className="ml-auto" href="/">Strive-Cinema</NavbarBrand>       

        </Navbar>
      </div>
    );
  }
}