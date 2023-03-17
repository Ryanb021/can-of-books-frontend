import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container } from 'react-bootstrap';
import BookFormModal from './BookFormModal';
import BookUpdateModal from './BookUpdateModal';
import './BestBooks.css';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      noBooks: true,
      showForm: false,
      showUpdateModal: false,
      selectedBook: {}
    }
  }

  updateOpenFormModal = (event) => {
    event.preventDefault();
    this.setState({
      showUpdateModal: true,
    })
  }

  updateCloseFormModal = (event) => {
    this.setState({
      showUpdateModal: false,
    })
  }

  openFormModal = (event) => {
    event.preventDefault();
    this.setState({
      showForm: true,
    })
  }

  closeFormModal = (event) => {
    this.setState({
      showForm: false,
    })
  }

  bookSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.title.value);
    console.log(event.target.image_url.value);
    console.log(event.target.description.value);
    console.log(event.target.status.checked);
    let newBook = {
      title: event.target.title.value,
      image_url: event.target.image_url.value,
      description: event.target.description.value,
      status: event.target.value.checked,
    }
    this.setState({
      showForm: false,
    })
    this.postBook(newBook);
  }
  // Create Book function
  postBook = async (newBook) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let createdBook = await axios.post(url, newBook);
      console.log(createdBook.data);
      this.setState({
        books: [...this.state.books, createdBook.data]
      })
    } catch (error) {
      console.log('error msg: ', error.response.data)
    }
  }

  // Delet Book function
  deleteBook = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks
      });
    } catch (error) {
      console.log('error msg: ', error.response.data)
    }
  }

  openUpdateModal = (i) => {
    this.setState({
      showUpdateModal: true,
      selectedBook: i,
    })
  }

  updatedBook = async (book) => {
    try {
      let updatedBookDataBase = await axios.put(`${process.env.REACT_APP_SERVER}/books/${book._id}`);
      let updatedMoreBooks = this.state.books.map(i => {
        return i._id === book._id
          ? updatedBookDataBase.data
          : i;
      });
      this.setState({
        showUpdateModal: false,
        books: updatedMoreBooks,
      })

    } catch (error) {
      console.log('error message:', error.response.data)
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBooks = async () => {
    try {

      let results = await axios.get(`${process.env.REACT_APP_SERVER}/books`);

      //let bookData = await axios.get(url);

      this.setState({
        books: results.data,
        noBooks: false,

      })

    } catch (error) {
      console.log('Ha! Ha! Ha! You Suck!', error.response.data)
    }

  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    // /* TODO: render all the books in a Carousel */
    let booksCarousel = this.state.books.map(
      i => {

        return (
          <Carousel.Item key={i._id}>
           <span>
              <img
                src='https://w0.peakpx.com/wallpaper/113/52/HD-wallpaper-the-dark-knight-rises.jpg'
                alt={i.title}
              />
            </span>

            <Container className="caption">
              <Carousel.Caption className="title">
                <h3>{i.title}</h3>
                <p className="description">{i.description}</p>

                <Button className="delete" variant="outline-dark" onClick={() =>
                  this.deleteBooks(i._id)}>Delete This Book</Button>
                <Button className="update" variant="outline-warning" onClick={() => this.openUpdateModal(i)}>Update Book Information</Button>

              </Carousel.Caption>
            </Container>
          </Carousel.Item >


        )
      }
    );

    return (
      <>
        <h2 className="gotham">Gotham City's Popular Books</h2>
        {
          this.state.books.length ? (
            <Carousel fade variant="dark">
              {booksCarousel}
            </Carousel>

          )
            : (
              <h3>What are you looking for? There is nothing here.</h3>
            )
        }

        <Button className="add" variant="outline-success" onClick={this.openFormModal}>Add your favorite book</Button>
        {
          this.state.showForm ?
            <BookFormModal
              bookSubmit={this.bookSubmit}
              closeFormModal={this.closeFormModal}
              openFormModal={this.openFormModal}
            /> :
            <></>
        }
        {
          this.state.showUpdateModal ?
            <BookUpdateModal
              updatedBook={this.updatedBook}
              book={this.state.selectedBook}
              updateOpenFormModal={this.updateOpenFormModal}
              updateCloseFormModal={this.updateCloseFormModal}
            /> :
            <></>
        }
      </>
    )
  }
}

export default BestBooks;

//<p>Status: {i.status ? 'Available' : 'Not Available? You must be joking!'}</p>
