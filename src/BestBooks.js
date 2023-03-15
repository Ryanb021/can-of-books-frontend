import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import BookFormModal from './BookFormModal';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBooks = async () => {
    try {

      let url = `${process.env.REACT_APP_SERVER}/books`

      let bookData = await axios.get(url);

      this.setState({
        books: bookData.data

      });

    } catch (error) {
      console.log(error.response)
    }

  }

  deleteBooks = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;

      await axios.delete(url);

      let updatedBooks = this.state.books.filter(book => book._id !== id);

      this.setState({
        books: updatedBooks
      });

    } catch (error) {
      console.log(error.message)
    }
  }

  handleSyncBooks = (sync) => {
    this.setState({
      books: sync
    }

    )
  }
  componentDidMount() {
    this.getBooks();
  }

  handleBook = () => {
    this.props.handleOpenModal();
  }


  render() {
    /* TODO: render all the books in a Carousel */
    let booksCarousel = this.state.books.map(
      i => {
        return (
          <Carousel.Item key={i._id}>
            <img
              src=''
              alt={i.title}
            />
            <Carousel.Caption>
              <h3>{i.title}</h3>
              <p>{i.description}</p>
              <p>Status: {i.status ? 'Available' : 'Not Available'}</p>
              <Button type='submit' variant="outline-dark" onClick={() =>
                this.deleteBooks(i._id)}>Delete This Book</Button>

            </Carousel.Caption>

          </Carousel.Item>
        )
      }
    );

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel fade variant="dark">
            {booksCarousel}
          </Carousel>
          //   <Carousel>
          //     {this.state.books.map((book, idx) => {
          //       return (

          //         <Carousel.Item key={idx}>
          //           <Button onClick={() => { }}>Delete</Button>
          //           <img

          //           />
          //           <Carousel.Caption>
          //             <h3>{book.title}</h3>
          //             <p></p>
          //           </Carousel.Caption>
          //         </Carousel.Item>
          //       )
          //     })}


          //   </Carousel>
        ) : (
          <h3>No Books Found :</h3>
        )}

        <Button onClick={this.handleBook}>Add Book</Button>
        <BookFormModal
          handleCloseModal={this.props.handleCloseModal}
          showModal={this.state.books}
          handleSyncBooks={this.handleSyncBooks}
        />
      </>

    )
  }
}



export default BestBooks;
