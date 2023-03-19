import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogOutButton from './LogOutButton';
import BestBooks from './BestBooks';

class Header extends React.Component {
  render() {
    return (


   
 
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Gotham Library Book Collections</Navbar.Brand>
        <NavItem><Link to="/about" className="about">About the Creators</Link></NavItem>
        <NavItem><Link to="/" className="home">Home Page</Link></NavItem>
        { this.props.auth0.isAuthenticated ? <LogOutButton/> : <LoginButton/>}
        { this.props.auth0.isAuthenticated ? <BestBooks /> : <p className="why">What are you here for? <br />You need to Log In!</p> }
        {/* PLACEHOLDER: render a navigation link to the about page */}
      
      </Navbar>
    )
  }
}

export default withAuth0(Header);
//{ this.props.auth0.isAuthenticated ? <BestBooks /> : <p className="why">What are you here for? <br />You need to Log In!</p> }
// { this.props.auth0.isAuthenticated && <NavItem><Link to="/profile" className="profile">Profile</Link></NavItem>}
