import React from 'react';
import Document, { Main, Head, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props =>
            sheet.collectStyles(<App {...props} />)
        );

        const styleTags = sheet.getStyleElement();

        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>
                    <link rel="shortcut icon" href="https://cdn.sstatic.net/Sites/br/img/favicon.ico?v=c6678b633455" />
                    <link rel="apple-touch-icon" href="https://cdn.sstatic.net/Sites/br/img/apple-touch-icon.png?v=e57f45c9cfaf" />
                    <link rel="image_src" href="https://cdn.sstatic.net/Sites/br/img/apple-touch-icon.png?v=e57f45c9cfaf" />
                    <link rel="search" type="application/opensearchdescription+xml" title="Stack Overflow em Portugues" href="/opensearch.xml" />
                    <link rel="canonical" href="https://pt.stackoverflow.com/questions/59135/erro-stackoverflow" />
                    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://pt.stackoverflow.com/questions/59135/erro-stackoverflow" />
                    <meta property="og:site_name" content="Stack Overflow em Portugu&#234;s" />
                    <meta property="og:image" itemprop="image primaryImageOfPage" content="https://cdn.sstatic.net/Sites/br/img/apple-touch-icon@2.png?v=2bb2b60be04f" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:domain" content="pt.stackoverflow.com" />
                    <meta name="twitter:site" content="@StackOverflowPT" />
                    <meta name="twitter:creator" content="@StackOverflowPT" />
                    <meta name="twitter:title" property="og:title" itemprop="name" content="Erro StackOverflow" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
