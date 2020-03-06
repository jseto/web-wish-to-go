if ( process.env ) {
	if( process.env.GATSBY_LOCAL ) {
		console.info( '\x1b[33m', '-----> Running with LOCAL wish-to-go bundle\n' );
	}
	if( process.env.GATSBY_BETA ) {
		console.info( '\x1b[33m', '-----> Running with beta wish-to-go bundle\n' );
	}
}

module.exports = {
  siteMetadata: {
    title: `Wish to go`,
    description: `Improve visitor engagement in your travel blog site.`,
		author: `@wish_to_go`,
		siteUrl: `https://wish-to-go.com`,
  },
  plugins: [
		`gatsby-plugin-ts`,
    `gatsby-plugin-react-helmet`,
		'gatsby-plugin-sass',
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		'gatsby-plugin-catch-links',
		{
	    resolve: `gatsby-transformer-remark`,
	    options: {
	      plugins: [
					'gatsby-remark-numbered-footnotes',
					{
             resolve: `gatsby-remark-autolink-headers`,
             options: {
               icon: false,
							 removeAccents: true
						 }
         	},
	        {
	          resolve: `gatsby-remark-images`,
	          options: {
	            // It's important to specify the maxWidth (in pixels) of
	            // the content container as this plugin uses this as the
	            // base for generating different widths of each image.
	            maxWidth: 2048,
	          },
	        },
					'gatsby-remark-copy-linked-files',
					{
						resolve:'gatsby-remark-prismjs',
						options: {
							classPrefix: 'language-'
						}
					}
	      ],
	    },
	  },
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages`,
			}
		},
		// {
		// 	resolve: `gatsby-source-filesystem`,
		// 	options: {
		// 		name: `travel-posts`,
		// 		path: `${__dirname}/src/posts/travel`,
		// 	}
		// },
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/posts`,
			}
		},
		{
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-152680555-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: false,
      },
		},
		{
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: '303df9ad-9ed5-4144-bd8f-d72d0e84b4a8',
        enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
        enableImprovedAccessibility: false // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
      },
    },
		`gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/wish-to-go-icon.png`, // This path is relative to the root of the site.
      },
    },
		{
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
				develop: false,
				whitelist: [ 'gatsby-resp-image-wrapper', 'joanna-banner', 'is-1', 'is-2', 'is-3', 'is-4', 'is-5', 'is-6', 'is-8', 'is-10', 'is-12' ],
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
