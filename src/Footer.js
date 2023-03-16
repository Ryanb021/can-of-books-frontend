import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>&copy; Ryan Bagan 2023</Navbar.Brand>
        <Navbar.Brand>&copy; Zachariah Jeter 2023</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
