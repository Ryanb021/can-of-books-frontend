import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import BookFormModal from './BookFormModal';
import BookUpdateModal from './BookUpdateModal';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
      showUpdateModal: false,
      selectedBook: {}
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

  handleUpdateBooks = async (bookUpdate) => {
    try {
      // this.props.handleOpenModal();
      let url = `${process.env.REACT_APP_SERVER}/books/${bookUpdate._id}`
      console.log('book update >>>>', bookUpdate)
      console.log('URL >>>', url)
      let updatedBook = await axios.put(url, bookUpdate);
      console.log('updatedBook.data >>>>>', updatedBook.data)
      let updatedArr = this.state.books.map(existingBook => {
        return existingBook._id === bookUpdate._id
          ? updatedBook.data
          : existingBook
      });
      console.log('Updated Arrays>>>', updatedArr)
      this.setState({
        books: updatedArr
      })


    } catch (error) {
      console.log(error.message)
    }

    } catch (error) {
      console.log(error.message)
    }

  }

  handleSyncBooks = (sync) => {
    this.setState({
      books: sync
testbranch
    })

  }


  componentDidMount() {
    this.getBooks();
  }

  handleBook = () => {
    this.props.handleOpenModal();
  }

  handleBook = () => {
    this.props.handleOpenModal();
  }

  handleUpdateModal = (book) => {
    this.setState({
      showUpdateModal: true,
      selectedBook: book
    })
  }

  closeUpdateModal = () => {
    this.setState({
      showUpdateModal: false
    })
  }

  render() {
    // * TODO: render all the books in a Carousel

    return (
        <>
        <h2>My Essential Lifelong Learn &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <>
            <Carousel fade variant="dark" slide={false}>
              {this.state.book.map((book, i_id) => {

                return (

                  <Carousel.item key={i._id}>
                    <img
                      src=''
                      alt={i.title}
                    />
                    <Carousel.Caption>
                      <Button type='submit' variant="outline-dark" onClick={() =>
                        this.deleteBooks(i_id)}>Delete This Book</Button>
                      <Button onClick={() => { this.handleUpdateModal(book) }}>Update</Button>

                      <h3>{i.title}</h3>
                      <p>{i.description}</p>
                      <p>Status: {i.status ? 'Available' : 'Not Available'}</p>
                    </Carousel.Caption>

                  </Carousel.item>
                )
              })}

              </Carousel>

              <BookUpdateModal>
                handleCloseModal={this.closeUpdateModal}
                showModal={this.state.showUpdateModal}
                book={this.state.selectedBook}
                handleUpdateBooks={this.handleUpdateBooks}
              </BookUpdateModal>
            </>

            ): (
            <h3>No Books Found :</h3>
            )
  }

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
