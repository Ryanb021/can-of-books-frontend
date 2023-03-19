import React from 'react';
import Alert from 'react-bootstrap/Alert'
import './Welcome.css';

class Welcome extends React.Component {
  render() {
    console.log('it is working');
    return (
      <Alert className="alert" variant="danger">
        Please Log In to Enter Gotham's Collection of Books
      </Alert>

    )
  }
}

export default Welcome;
