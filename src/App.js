import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './About.js'

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks
                handleOpenModal={this.handleOpenModal}
                      showModal={this.state.showModal}
                      handleCloseModal={this.handleCloseModal}
                />}
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
