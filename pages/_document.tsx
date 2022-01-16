import React, { ReactElement } from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {

    render(): ReactElement {
        return(
            <Html lang="en">
                <Head>
                    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                        <link rel="preconnect" href="https://fonts.gstatic.com" />
                            <link
                                href="https://fonts.googleapis.com/css2?family=Notable&family=Poppins:wght@300;400;500;600;700&family=Volkhov:wght@700&display=swap"
                                rel="stylesheet"/>

                                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                                      rel="stylesheet"
                                      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"/>


                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}