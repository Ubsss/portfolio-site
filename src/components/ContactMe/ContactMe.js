import React, { Component } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";

import "./ContactMe.css";

class ContactMe extends Component {
  handleMessageResend = () => {
    this.props.updateContactMeState(false);
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
    // e.preventDefault();

    // start loading

    //send api call
    axios
      .post(
        "https://us-central1-portfolio-site-8e4f6.cloudfunctions.net/sendContactMeMessage",

        {
          messageSubject: this.props.messageSubject,
          messageMessage: this.props.messageMessage,
          messageName: this.props.messageName,
          messageEmail: this.props.messageEmail
        }
      )
      .then(result => {
        this.props.updateContactMeState(true);
        console.log(result);
      })
      .catch(err => {
        this.props.updateContactMeState(false);
        console.log(err.message);
      });
  };

  render() {
    const { messageIsSent } = this.props;
    return (
      <Container className="justify-content-center text-center" id="contact">
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
          {messageIsSent ? (
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
                  variant="outline-secondary"
                  className=" btn Form-button"
                  type="submit"
                >
                  Send Message
                </Button>
              </Form>
            </Col>
          )}
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
