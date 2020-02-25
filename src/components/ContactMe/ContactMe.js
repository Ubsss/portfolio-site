import React, { Component } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";

import "./ContactMe.css";

class ContactMe extends Component {
  handleContactMeSection = messageIsSent => {
    switch (messageIsSent) {
      case "not-sent":
        return `<Col className="text-center Contact-me-section">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Control
              type="text"
              placeholder="Name"
              required
              className="Form-styling"
              onChange={this.handleNameChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              required
              className="Form-styling"
              onChange={this.handleEmailChange}
            />
          </Form.Group>

          <Form.Group controlId="formSubject">
            <Form.Control
              type="text"
              placeholder="Subject"
              required
              className="Form-styling"
              onChange={this.handleSubjectChange}
            />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Control
              as="textarea"
              rows="4"
              placeholder="Message"
              required
              className="Form-styling"
              onChange={this.handleMessageChange}
            />
          </Form.Group>
          <Button
            variant="outline-white"
            className=" btn Form-button"
            type="submit"
            size="lg"
          >
            Send Message
          </Button>
        </Form>
      </Col>`;
      case "sending":
        // code block
        break;
      case "sending-error":
        return `<Col className="Thank-you-card d-flex align-items-center justify-content-center Contact-me-section">
            <div>
              <h1 className="Thank-you-card-text mb-3">
                Oops...
              </h1>
              <p className="Card-text text-secondary">
              There was an error sending your message. Please try again.
              </p>
              <Button
                size="lg"
                variant="outline-secondary"
                className="btn Form-button"
                type="button"
                onClick={this.handleMessageResend}
              >
                Try again
              </Button>
            </div>
          </Col>
        );`;
      case "sent":
        return `<Col className="Thank-you-card d-flex align-items-center justify-content-center Contact-me-section">
            <div>
              <h1 className="Thank-you-card-text mb-3">
                Thank you for your message!
              </h1>
              <p className="Card-text text-secondary">
              Can't wait to chat with you!
              </p>
              <Button
                // size="lg"
                variant="outline-secondary"
                className="btn Form-button"
                type="button"
                onClick={this.handleMessageResend}
              >
                Send another message
              </Button>
            </div>
          </Col>
        );`;

      default:
      // code block
    }
  };

  handleMessageResend = () => {
    this.props.updateContactMeState("not-sent");
  };

  handleNameChange = e => {
    this.props.updateMessageName(e.target.value);
  };

  handleEmailChange = e => {
    this.props.updateMessageEmail(e.target.value);
  };

  handleSubjectChange = e => {
    this.props.updateMessageSubject(e.target.value);
  };

  handleMessageChange = e => {
    this.props.updateMessageMessage(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateContactMeState("sending");

    // start loading
    // this.props.updateContactMeState("loading");

    //send api call
    axios({
      method: "post",
      url:
        "https://us-central1-portfolio-site-8e4f6.cloudfunctions.net/sendContactMeMessage",

      data: {
        messageSubject: this.props.messageSubject,
        messageMessage: this.props.messageMessage,
        messageName: this.props.messageName,
        messageEmail: this.props.messageEmail,
        messageDTStamp: new Date().toDateString()
      },
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(result => {
        this.props.updateContactMeState("sent");
      })
      .catch(err => {
        this.props.updateContactMeState("sending-error");
      });
  };

  render() {
    const { messageIsSent } = this.props;
    return (
      <Container
        className="justify-content-center text-center mt-5 mb-5 p-4"
        id="contact"
      >
        <Row>
          <Col>
            <h1 className="text-center Contact-me-section-heading">
              Contact Me
            </h1>
            <p className="Card-text text-secondary">
              Interested in working together, need some advice or just want to
              say hi? Feel free to message me.
            </p>
          </Col>
        </Row>
        <Row>
          {this.handleContactMeSection(messageIsSent)}
          {/* {messageIsSent ? (
            <Col className="Thank-you-card d-flex align-items-center justify-content-center Contact-me-section">
              <div>
                <h1 className="Thank-you-card-text mb-3">
                  Thank you for your message!
                </h1>
                <Button
                  // size="lg"
                  variant="outline-secondary"
                  className="btn Form-button"
                  type="button"
                  onClick={this.handleMessageResend}
                >
                  Send Another Message
                </Button>
              </div>
            </Col>
          ) : (
            <Col className="text-center Contact-me-section">
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    required
                    className="Form-styling"
                    onChange={this.handleNameChange}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    required
                    className="Form-styling"
                    onChange={this.handleEmailChange}
                  />
                </Form.Group>

                <Form.Group controlId="formSubject">
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    required
                    className="Form-styling"
                    onChange={this.handleSubjectChange}
                  />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    rows="4"
                    placeholder="Message"
                    required
                    className="Form-styling"
                    onChange={this.handleMessageChange}
                  />
                </Form.Group>
                <Button
                  variant="outline-white"
                  className=" btn Form-button"
                  type="submit"
                  size="lg"
                >
                  Send Message
                </Button>
              </Form>
            </Col>
          )} */}
        </Row>
      </Container>
    );
  }
}

// pass store to component as prop
const mapStateToProps = state => {
  return {
    messageIsSent: state.messageIsSent,
    messageName: state.messageName,
    messageEmail: state.messageEmail,
    messageSubject: state.messageSubject,
    messageMessage: state.messageMessage
  };
};

// allow component to manipulate store
const mapDispatchToProps = dispatch => {
  return {
    updateContactMeState: newVal => {
      dispatch({
        type: "UPDATE_CONTACT_ME_STATE",
        value: newVal
      });
    },
    updateMessageName: newVal => {
      dispatch({
        type: "UPDATE_MESSAGE_NAME",
        value: newVal
      });
    },
    updateMessageEmail: newVal => {
      dispatch({
        type: "UPDATE_MESSAGE_EMAIL",
        value: newVal
      });
    },
    updateMessageSubject: newVal => {
      dispatch({
        type: "UPDATE_MESSAGE_SUBJECT",
        value: newVal
      });
    },
    updateMessageMessage: newVal => {
      dispatch({
        type: "UPDATE_MESSAGE_MESSAGE",
        value: newVal
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactMe);
