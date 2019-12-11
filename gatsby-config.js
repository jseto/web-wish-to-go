module.exports = {
  siteMetadata: {
    title: `Wish to go`,
    description: `Improve visitor engagement in your travel blog site.`,
    author: `@wish_to_go`,
  },
  plugins: [
		`gatsby-plugin-ts`,
    `gatsby-plugin-react-helmet`,
		'gatsby-plugin-sass',
		`gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
		{
	    resolve: `gatsby-transformer-remark`,
	    options: {
	      plugins: [
					{
             resolve: `gatsby-remark-autolink-headers`,
             options: {
               icon: false
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
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/posts`,
			}
		},
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
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
