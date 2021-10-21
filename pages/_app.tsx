import "../Styles/Global/Globals.scss";
import type { AppProps } from "next/app";
import { store } from "../ReduxStore/index";
import { createWrapper } from "next-redux-wrapper";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Component {...pageProps} />
      {/* </PersistGate> */}
    </Provider>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(MyApp);
