// Overriding the default Document behaviour to implement server side rendering of css
// With serverStyleSheet, we will crawl the whole app, collect and compile all styles into 1 and
// then dump them into the page. We ll use getInitialProps that will run on the server before the render()
// to do that so our pages are rendered with styling from the first render. This prevents 'flickering'

import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
