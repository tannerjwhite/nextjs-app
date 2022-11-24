// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            <title>Tanner White | Personal Website</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="Personal website developed by Tanner White"></meta>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
