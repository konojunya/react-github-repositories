import * as React from "react";
import { HelmetData } from "react-helmet";
import { config } from "../../config";

interface Props {
  helmet: HelmetData;
  markup: string;
  state: any;
}

const json2str = (obj: any): string => {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
};

export const Html: React.FunctionComponent<Props> = ({ helmet, markup, state }) => (
  <html lang="ja" {...helmet.htmlAttributes.toComponent()}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta name="description" content={config.DESCRIPTION} />
      <meta name="keywords" content={config.KEYWORDS} />
      <meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover" />
      {helmet.link.toComponent()}
    </head>
    <body {...helmet.bodyAttributes.toComponent()}>
      <div id="app" dangerouslySetInnerHTML={{ __html: markup }} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__STATE__=${json2str(state)};`
        }}
      />
      <script src={`/assets/${config.VERSION}/vendor.js`} />
      <script src={`/assets/${config.VERSION}/bundle.js`} />
    </body>
  </html>
)