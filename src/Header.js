import React from 'react';
import { Navbar, NavItem, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogOutButton from './LogOutButton';
//import BestBooks from './BestBooks';
import './Header.css';

class Header extends React.Component {
  render() {
    return (



      <>
        <Navbar className="bar" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="collapse" id="basic-navbar-nav">
              <Nav className="nav">
                <Navbar.Brand className="brand">Gotham Library Book Collections</Navbar.Brand>

                <NavItem><Link to="/" className="home">Home Page</Link></NavItem>
                <NavItem><Link to="/about" className="about">About the Creators</Link></NavItem>
                {this.props.auth0.isAuthenticated ?
                  <NavItem>
                    <LogOutButton />
                  </NavItem> : <NavItem>
                    <LoginButton />
                  </NavItem>}
                {this.props.auth0.isAuthenticated && <NavItem><Link to="profile" className="nav-link">Profile</Link></NavItem>}
              </Nav>
            </Navbar.Collapse>
          </Container>
          {/* PLACEHOLDER: render a navigation link to the about page */}

        </Navbar >
      </>
    )
  }
}

export default withAuth0(Header);
//{ this.props.auth0.isAuthenticated ? <BestBooks /> : <p className="why">What are you here for? <br />You need to Log In!</p> }
// { this.props.auth0.isAuthenticated && <NavItem><Link to="/profile" className="profile">Profile</Link></NavItem>}
