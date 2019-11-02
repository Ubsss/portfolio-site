import React, { Component } from "react";
import { Modal, Button, ButtonToolbar } from "react-bootstrap";

class ModalComponent extends Component {
  render() {
    return (
      <Modal showOverlay={true}>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Hello there, this is a modal</p>
        </Modal.Body>
        <Modal.Footer>
          <Button>Cancel</Button>
          <Button btnStyle="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalComponent;
