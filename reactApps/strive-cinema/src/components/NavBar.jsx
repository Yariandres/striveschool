import React from 'react';
import { Link } from 'react-router-dom';

import {
  Navbar,
  Nav,
  NavItem
  } from 'reactstrap';

export default class NavBar extends React.Component {

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">      
            <Nav navbar>
              <NavItem>                
                  <Link to="/FavGallery">Favourites Sagas</Link>                
              </NavItem>

              <NavItem className="mx-2">
                <Link to="/FavSaga">
                 Recent
                </Link>                
              </NavItem>


              <NavItem>
                <Link to="/FavSagaNow">
                  Action
                </Link>
              </NavItem>            
            </Nav>

                
            <Link to="/" className="ml-auto navbrand text-light">Strive-Cinema</Link>  
         

        </Navbar>
      </div>
    );
  }
}