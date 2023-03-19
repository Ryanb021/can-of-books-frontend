import { withAuth0 } from "@auth0/auth0-react";
import React from 'react';
import BestBooks from './BestBooks';
import './Content.css';

class Content extends React.Component {

  render() {
    console.log('it is working');
    return (
      <>
        {this.props.auth0.isAuthenticated ?

          <BestBooks />
          :
          <p className="why">What are you here for? <br />You need to Log In!</p>

          }
      </>
    )
  }
}

export default withAuth0(Content);
