import { combineReducers } from "redux";
import CartReducers from "./CartReducers";
import ModalReducer from "./ModalReducer";
const rootReducer = combineReducers({
  CartReducers,
  ModalReducer,
});

export default rootReducer;
