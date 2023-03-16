import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

class BookUpdateModal extends React.Component {


  // *** Create cat 2 handlers: 1 to handle the form submission & 1 to post to DB ***

  handleBookSubmit = (event) => {

    event.preventDefault();
    console.log('testing props 1 >>>', this.props.book)

    // TODO: BUILD A Book OBJECT FROM MY FORM VALUES
    let bookUpdate = {
      title: event.target.title.value || this.props.book.title,
      description: event.target.description.value || this.props.book.description,
      status: event.target.status.checked || this.props.book.status,
      _id: this.props.book._id,
      __v: this.props.book.__v,

    }

    this.props.updatedBook(bookUpdate);
    console.log('testing props 2 >>>>', this.props.book)

    // this.postBooks(newBook);
    //this.props.handleCloseModal();
  }

  render() {
    console.log(this.props.book.title);
    return (
      <>
      <Modal show={this.props.updateOpenFormModal} onHide={this.props.updateCloseFormModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add your favorite book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleBookSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder={this.props.book.title} />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder={this.props.description} />
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Check type="checkbox" label="Status: Available" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update Your Book
            </Button>
          </Form>
        </Modal.Body>
       

      </Modal>
      </>)
  }
}

export default BookUpdateModal;

/* <Form onSubmit={this.handleBookSubmit}>
<Form.Group controlId="title">
  <Form.Label>Title</Form.Label>
  <Form.Control type="text" defaultValue={this.props.book.title} />
</Form.Group>
<Form.Group controlId="description">
  <Form.Label>Description</Form.Label>
  <Form.Control type="text" defaultValue={this.props.book.description} />
</Form.Group>
<Form.Group controlId="status">
  <Form.Check type="checkbox" label="Status" defaultChecked={this.props.book.status} />
</Form.Group>
<Button type="submit">Update a Book</Button>
</Form> */
