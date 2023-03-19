import { withAuth0 } from "@auth0/auth0-react";
import React from 'react';
import BestBooks from './BestBooks';
import Welcome from './Welcome';

class Content extends React.Component {

  render() {
    console.log('it is working');
    return (
      <>
      {this.props.auth0.isAuthenticated ?

        <BestBooks />
        :

        <Welcome />}
      </>
    )
  }
}

export default withAuth0(Content);
