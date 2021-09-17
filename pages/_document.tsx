import Document, { Html, Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

export default class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();

    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            src='https://code.jquery.com/jquery-3.6.0.slim.js'
            integrity='sha256-HwWONEZrpuoh951cQD1ov2HUK5zA5DwJ1DNUXaM6FsY='
            crossOrigin='anonymous'
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
