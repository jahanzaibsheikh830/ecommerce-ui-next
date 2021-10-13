import { cartItem } from "../Store/Actions/CartAction";
export const incItem = (dispatch, salesData, cartState) => {
  const exist = cartState?.find((item) => item.id === salesData?.id);
  if (exist) {
    dispatch(
      cartItem({
        cartItems: cartState.map((x) =>
          x.id === salesData?.id ? { ...exist, qty: exist.qty + 1 } : x
        ),
      })
    );
  } else {
    dispatch(
      cartItem({
        cartItems: [...cartState, { ...salesData, qty: 1 }],
      })
    );
  }
};
export const decItem = (dispatch, salesData, cartState) => {
  const exist = cartState?.find((item) => item.id === salesData?.id);
  if (exist.qty === 1) {
    dispatch(
      cartItem({
        cartItems: cartState.filter((x) => x.id !== salesData?.id),
      })
    );
  } else {
    dispatch(
      cartItem({
        cartItems: cartState.map((x) =>
          x.id === salesData?.id ? { ...exist, qty: exist.qty - 1 } : x
        ),
      })
    );
  }
};

export const removeItem = (dispatch, salesData, cartState) => {
  cartState?.find((item, index) => {
    if (item.id === salesData?.id) {
      cartState.splice(index, 1);
      const updatedData = [...cartState];
      return dispatch(
        cartItem({
          cartItems: updatedData,
        })
      );
    }
  });
};
