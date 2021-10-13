import "../styles/globals.scss";
import type { AppProps } from "next/app";
import store from "../store/index";
import { createWrapper } from "next-redux-wrapper";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
const makestore = () => store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(MyApp);
