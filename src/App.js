import React from 'react';
import Header from './Header';
import Footer from './Footer';
//import BestBooks from './BestBooks';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import LoginButton from './LoginButton';
//import LogoutButton from './LogOutButton';
import Profile from './Profile';
import Content from './Content';
//import { withAuth0 } from "@auth0/auth0-react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
          <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={
                <Content />
              
              }
            >
            </Route>

            
            <Route
              exact path="/about"
              element={<About />}
            >
            </Route>
            <Route
              exact path="/profile"
              element={
                <Profile />
            }
            >
            </Route>
          </Routes>
          <Footer />
        </Router>

      </>
    )
  }
}

export default App;
//handleOpenModal={this.handleOpenModal}
//showModal={this.state.showModal}
//handleCloseModal={this.handleCloseModal}
