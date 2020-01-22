// Only put state that is shared amongst components
const initState = {
  messageIsSent: false,
  messageName: "",
  messageEmail: "",
  messageSubject: "",
  messageMessage: ""
};

const rootReducer = (state = initState, action) => {
  // set reducer actions
  switch (action.type) {
    case "UPDATE_MESSAGE_IS_SENT":
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
