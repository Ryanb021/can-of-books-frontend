import { Component } from "react";
//import React from 'react';
//import { jsx } from 'react/jsx-runtime';

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>

        <h2>Gotham Library Founders:</h2>
        <section id="about-profile-container">
          <section className="section">
            <img className="profileImage" src="" alt="" />
            <p>Name: Zachariah Jeter</p>
            <p>Title: Full Stack Developer</p>
            <p>Location: Seattle, WA</p>
          </section>
          <section className="section">
          <img className="profileImage" src="" alt="" />
          <p>Name: Ryan Bagan</p>
          <p>Title: Full Stack Developer</p>
          <p>Location: Seattle, WA</p>
        </section>
      </section>
      </>
    )
  }
};

export default Profile;
