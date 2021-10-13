let initalState = {
  cartItems: [],
};

export default function setCartItems(state = initalState, action) {
  switch (action.type) {
    case "CARD_DATA":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
