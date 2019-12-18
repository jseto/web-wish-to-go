import * as React from "react"

const runWithLocalHost = process.env.NODE_ENV==='development' && process.env.GATSBY_LOCAL

export const wishToGoHost = runWithLocalHost
	? 'http://localhost:8080/'
	: process.env.GATSBY_BETA
		? 'https://wish-to-go-beta.web.app/'
		: 'https://wish-to-go.web.app/'

if ( runWithLocalHost ) {
	console.info( '%cRunning with LOCAL wish-to-go bundle', 'color: aqua' );
}
console.info( '%s%cWish-to-go bundle at:', wishToGoHost, 'color: aqua' );

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
      </body>
    </html>
  )
}

export default HTML;
