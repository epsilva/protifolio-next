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
        const retorno = {
            about: 'Esdras',
            apresentation: 'Sou Eu',
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-esdras.appspot.com/o/esdras-pinheiro%2FimgHome.jpeg?alt=media&token=66d76474-c2bb-48d6-a20e-8b4a5a5a9bbd'
        }
        return (
            <html>
                <Head>
                    {this.props.styleTags}
                    <meta charSet="utf-8" />
                    <title>Esdras Pinheiro</title>
                    <link rel="canonical" href="https://portifolio-esdras.herokuapp.com/profile/esdras-pinheiro" />
                    <meta property="og:description" content={`${retorno.about?.replace(/<[^>]*>?/gm, '')}`} />
                    <meta property="og:site_name" content={`${retorno.apresentation} - Veja Nossas Vagas!`} />
                    <meta property="og:title" content={`${retorno.apresentation}`} />
                    <meta property="og:image" content={`${retorno.img}`} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
