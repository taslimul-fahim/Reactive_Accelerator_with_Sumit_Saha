const initialState = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      return {
        dispatch: [...state, action.payload],
      };

    case "Remove_From_Cart":
      return {
        dispatch: state.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export { initialState, cartReducer };
