// Only put state that is shared amongst components
const initState = {
  /*
   * Contact me possible states:
   * - not-sent: allow user to send message and show form
   * - sending-error: Show error message "Unable to send your message, please try again." and "Try again" button
   * - sent: show thank you message and "send another message" button
   */
  contactMeState: "not-sent",

  /**
   * Contact me button possible states:
   * - sending: disable button and show loading spinner
   * - not-sending: button is available
   */

  contactMeButtonState: "not-sending",
  messageName: "",
  messageEmail: "",
  messageSubject: "",
  messageMessage: ""
};

const rootReducer = (state = initState, action) => {
  // set reducer actions
  switch (action.type) {
    case "UPDATE_CONTACT_ME_STATE":
      return {
        ...state,
        contactMeState: action.value
      };
    case "UPDATE_CONTACT_ME_BUTTON_STATE":
      return {
        ...state,
        contactMeButtonState: action.value
      };
    case "UPDATE_MESSAGE_NAME":
      return {
        ...state,
        messageName: action.value
      };
    case "UPDATE_MESSAGE_EMAIL":
      return {
        ...state,
        messageEmail: action.value
      };
    case "UPDATE_MESSAGE_SUBJECT":
      return {
        ...state,
        messageSubject: action.value
      };
    case "UPDATE_MESSAGE_MESSAGE":
      return {
        ...state,
        messageMessage: action.value
      };

    default:
  }

  return state;
};

export default rootReducer;
