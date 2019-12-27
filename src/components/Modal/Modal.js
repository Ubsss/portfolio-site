import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class ModalComponent extends Component {
  state = {
    show: false,
    setShow: false
  };

  handleClose = () => {
    this.setState({
      setShow: false
    });
  };

  handleShow = () => {
    this.setState({
      setShow: true
    });
  };
  render() {
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch this specificmodal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalComponent;
