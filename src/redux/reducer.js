const initialState = {
  page: "Home",
};
function reducer(state = initialState, action = { type: "", payload: "" }) {
  switch (action.type) {
    case "INTERFACE/CHANGE_PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
}

export default reducer;
