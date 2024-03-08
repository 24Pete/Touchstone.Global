import { Html, Head, Main, NextScript } from "next/document";
import { ApolloClient, InMemoryCache} from "@apollo/client";
import {ApolloProvider} from "@apollo/react-hooks";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href="https://use.typekit.net/cpd3mbf.css"/>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <meta name="description" content="Unlocking exponential value with the Touchstone collective" />
      <meta property="og:image" content="<generated>" />
<meta property="og:image:type" content="<generated>" />
<meta property="og:image:width" content="<generated>" />
<meta property="og:image:height" content="<generated>" />
      </Head>
      <body className="bg-dusk">
  
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
