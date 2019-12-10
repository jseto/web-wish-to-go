const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark` && !node.frontmatter.pageTemplate ) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
		const fields = edge.node.fields
		if ( fields && fields.slug ) {
    	const slug = fields.slug
	    actions.createPage({
	      path: slug,
	      component: require.resolve(`./src/templates/blog-entry-page.tsx`),
	      context: { slug: slug },
	    })
		}
  })
}
