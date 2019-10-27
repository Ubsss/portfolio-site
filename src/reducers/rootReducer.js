// Only put state that is shared amongst components
const initState = {
  siteIsAwesome: true
};

const rootReducer = (state = initState, action) => {
  // set reducer actions
  switch (action.type) {
    case "UPDATE_SITE_IS_AWESOME":
      return {
        ...state,
        siteIsAwesome: action.newVal
      };
    default:
  }

  return state;
};

export default rootReducer;
