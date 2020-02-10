// Only put state that is shared amongst components
const initState = {
  /**
   * Contact me possible states:
   * - Message not yet sent
   * - Message sending error
   * - Message is sending or loading
   * -
   */
  contactMeState: false,
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
        messageIsSent: action.value
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
