import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./Reducers/index";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
// const store = createStore(rootReducer);
// export default store;
