import React, { Component } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

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

    console.log(this.props.messageMessage);

    let sendMessageURL = process.env.REACT_APP_SEND_MESSAGE_URL;

    // add verfication token to api call

    // const transporter = nodemailer.createTransport({
    //   service: "Yahoo",
    //   auth: {
    //     user: process.env.REACT_APP_BOT_EMAIL_USER,
    //     pass: process.env.REACT_APP_BOT_EMAIL_PASSWORD
    //   }
    // });

    // const mailOptions = {
    //   from: process.env.REACT_APP_BOT_EMAIL_USE,
    //   to: process.env.REACT_APP_PERSONAL_EMAIL,
    //   subject: this.props.messageSubject,
    //   text: `Name: ${this.props.messageName}
    //          Email: ${this.props.messageEmail}
    //          Message: ${this.props.messageMessage}`
    // };

    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     this.props.updateContactMeState(true);
    //     console.log("Email sent: " + info.response);
    //   }
    // });

    this.props.updateContactMeState(true);
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
                    // size="lg"
                    className="Form-styling"
                    onChange={this.handleNameChange}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    // size="lg"
                    className="Form-styling"
                    onChange={this.handleEmailChange}
                  />
                </Form.Group>

                <Form.Group controlId="formSubject">
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    // size="lg"
                    className="Form-styling"
                    onChange={this.handleSubjectChange}
                  />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    rows="4"
                    placeholder="Message"
                    // size="lg"
                    className="Form-styling"
                    onChange={this.handleMessageChange}
                  />
                </Form.Group>
                <Button
                  // size="lg"
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
