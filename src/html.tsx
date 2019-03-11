/* tslint:disable no-var-requires */
/* tslint:disable no-console */

import * as React from "react";
import Helmet from "react-helmet";

const config = require("../gatsby-config.js");

interface HtmlProps {
  body: any;
  postBodyComponents: any;
  headComponents: any;
}

export default (props: HtmlProps) => {
  const head = Helmet.rewind();

  const verification =
    config.siteMetadata && config.siteMetadata.googleVerification ? (
      <meta
        name="google-site-verification"
        content={config.siteMetadata.googleVerification}
      />
    ) : null;

  return (
    <html lang="en">
      <head>
        {props.headComponents}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />

        <meta charSet="utf-8" />
        <title>Nanophonics | DSP + AI + mobile Apps</title>
        <meta
          name="description"
          content="We create smart AI powered mobile apps."
        />
        <meta name="image" content="https://www.nanophonics.com/social.png" />
        <meta itemProp="name" content="Nanophonics | DSP + AI + mobile Apps" />
        <meta
          itemProp="description"
          content="We create smart AI powered mobile apps."
        />
        <meta
          itemProp="image"
          content="https://www.nanophonics.com/social.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Nanophonics | DSP + AI + mobile Apps"
        />
        <meta
          name="twitter:description"
          content="We create smart AI powered mobile apps."
        />
        <meta
          name="twitter:image:src"
          content="https://www.nanophonics.com/social.png"
        />
        <meta name="og:title" content="Nanophonics | DSP + AI + mobile Apps" />
        <meta
          name="og:description"
          content="We create smart AI powered mobile apps."
        />
        <meta
          name="og:image"
          content="https://www.nanophonics.com/social.png"
        />
        <meta name="og:url" content="https://www.nanophonics.com/" />
        <meta
          name="og:site_name"
          content="Nanophonics | DSP + AI + mobile Apps"
        />
        <meta name="og:type" content="website" />

        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {verification}
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
};
