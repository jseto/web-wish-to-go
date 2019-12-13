import * as React from "react"

export const wishToGoHost = process.env.NODE_ENV === 'development'
	? 'http://localhost:8080/'
	: 'https://wish-to-go.web.app/'

export const HTML: React.FC = (props: any ) => {

  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
				<script type="text/javascript" src={ `${ wishToGoHost }wish-to-go.bundle.js` }></script>
				}
      </body>
    </html>
  )
}

export default HTML;
