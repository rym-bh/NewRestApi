        
import React, { Component } from "react";
import { Modal, Button, FormControl } from "react-bootstrap";
class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount() {
    this.props.isEdit &&
      this.setState({
        name: this.props.contact.name,
        email: this.props.contact.email,
        phone: this.props.contact.phone,
        id: this.props.contact._id,
      });
  }

  clickHandler = () => {
    this.props.handleShow();
    this.props.handleClick(this.state);
  };
 
  render() {
    const { show, handleShow, name, email, phone,handleAdd } = this.props;
    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          {" "}
          ADD
        </Button>
        <Modal show={show} onHide={handleShow} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl
              type="text"
              name="name"
              placeholder="Please Enter a name...."
              defaultValue={name}
              onChange={this.handleChange}
            />
            <FormControl
              type="text"
              name="email"
              placeholder="Please Enter a mail...."
              defaultValue={email}
              onChange={this.handleChange}
            />
            <FormControl
              type="text"
              name="phone"
              placeholder="Please Enter a phone number...."
              defaultValue={phone}
              onChange={this.handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>
              save
            </Button>
            <Button variant="primary" onClick={this.clickHandler} >
              Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default AddContact;